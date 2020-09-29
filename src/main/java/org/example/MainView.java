package org.example;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.upload.receivers.MemoryBuffer;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.server.StreamResource;
import org.example.tasks.ExpandedFormTask;
import org.example.tasks.SubstringFinderTask;
import org.example.tasks.Task;

import java.io.*;
import java.util.LinkedList;

@Route
@PWA(name = "IT-Service test task", shortName = "Test task")
public class MainView extends VerticalLayout {
    private TextField inputField;
    private ComboBox<Task> taskSelect=new ComboBox<>("Select task   ");
    private Anchor download = new Anchor();
    private LinkedList<Task> tasks = new LinkedList<>();

    public MainView() {
        initTasks();

        inputField = new TextField("Input");
        inputField.addValueChangeListener(event ->{
           download.setHref(getStreamResource("output.txt",createFileContent()));
        });

        TextField outputField = new TextField("Output");
        outputField.setReadOnly(true);
        Label outputLabel = new Label("Output");
        Span output = new Span();


        SubstringFinderTask substringFinderTask = new SubstringFinderTask();
        ExpandedFormTask expandedFormTask = new ExpandedFormTask();
        taskSelect.setItems(substringFinderTask, expandedFormTask);
        taskSelect.setValue(substringFinderTask);
        taskSelect.addValueChangeListener(event ->{
            download.setHref(getStreamResource("output.txt",createFileContent()));
        });

        Button getResultButton = new Button("Result", buttonClickEvent -> {
            try {
                output.setText(taskSelect.getValue().doTask(inputField.getValue()));
            }catch (NumberFormatException e){
                Notification.show("Invalid input format");
            }
        });


        download.getElement().setAttribute("download", true);
        download.setTarget("_blank");
        download.add(new Button("Save"));

        MemoryBuffer buffer = new MemoryBuffer();
        Upload upload = new Upload(buffer);
        upload.addFinishedListener(event -> {
            InputStream stream = buffer.getInputStream();
            try {
                readInput(stream);
            } catch (IOException e) {
                e.printStackTrace();
            }

        });
        add(upload);
        add(inputField);
        add(taskSelect);
        add(getResultButton);
        add(outputLabel);
        add(output);
        add(download);
    }

    private void initTasks() {
        tasks.add(new SubstringFinderTask());
        tasks.add(new ExpandedFormTask());
        taskSelect.setItems(tasks);
        taskSelect.setValue(tasks.get(0));
    }

    private String createFileContent() {
        return inputField.getValue() + " " + taskSelect.getValue().toString();
    }

    private StreamResource getStreamResource(String fileName, String content) {
        return new StreamResource(fileName, () -> new ByteArrayInputStream(content.getBytes()));
    }

    private void readInput(InputStream stream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(stream));
        String line = reader.readLine();
        int lastSpaceIndex = line.lastIndexOf(' ');
        String inputString = line.substring(0, lastSpaceIndex);
        String taskString = line.substring(lastSpaceIndex);
        String[] splitedLine = line.split("\\s+");

        //double inputNumber = Double.parseDouble(splitedLine[0]);
        inputField.setValue(inputString);
        for (Task task : tasks) {
            if (task.toString().equals(taskString)) {
                taskSelect.setValue(task);
                return;
            }
        }
    }
}
