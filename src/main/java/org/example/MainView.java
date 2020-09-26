package org.example;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.page.Page;
import com.vaadin.flow.component.textfield.BigDecimalField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.upload.receivers.MemoryBuffer;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.server.StreamResource;
import org.example.calculation.Calculator;
import org.example.calculation.operation.Logarithm;
import org.example.calculation.operation.Square;
import org.example.calculation.operation.SquareRoot;
import org.example.calculation.operation.UnaryOperation;
import javax.management.Notification;
import java.io.*;
import java.math.BigDecimal;

@Route
@PWA(name = "IT-Service test task", shortName = "Test task")
public class MainView extends VerticalLayout {
    private Calculator calculator;
    private BigDecimalField inputField;
    private ComboBox<UnaryOperation> operationSelect;

    public MainView() {
        initOperations();

        inputField = new BigDecimalField();
        inputField.setLabel("Input");
        inputField.setClearButtonVisible(true);
        inputField.setValue(new BigDecimal(0));

        TextField outputField = new TextField("Output");
        outputField.setReadOnly(true);

        operationSelect = new ComboBox<>();
        operationSelect.setItems(calculator.getOperations());
        operationSelect.setLabel("Select Operation");
        operationSelect.setValue(calculator.getCurOperation());
        operationSelect.addValueChangeListener(event -> {
            calculator.setCurrentOperation(operationSelect.getValue());
        });


        Button calculateButton = new Button("Calculate", buttonClickEvent -> {
            outputField.setValue(String.valueOf(calculator.calculate(inputField.getValue().doubleValue())));
        });

        Anchor anchor = new Anchor(getStreamResource("output.txt", createFileContent()), "");
        anchor.getElement().setAttribute("download", true);
        anchor.setTarget("_blank");
        anchor.add(new Button("Save"));
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
        add(operationSelect);
        add(calculateButton);
        add(outputField);
        add(anchor);
    }

    private void initOperations() {
        calculator = new Calculator();

        calculator.addOperation(new Square());
        calculator.addOperation(new SquareRoot());
        calculator.addOperation(new Logarithm(2));

        calculator.setCurrentOperation(calculator.getOperations().get(0));
    }

    private String createFileContent() {
        return inputField.getValue().doubleValue() + " " + operationSelect.getValue().toString();
    }

    private StreamResource getStreamResource(String fileName, String content) {
        return new StreamResource("output.txt", () -> new ByteArrayInputStream(content.getBytes()));
    }

    private void readInput(InputStream stream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(stream));
        String line = reader.readLine();
        String[] splitedLine = line.split("\\s+");

        double inputNumber = Double.parseDouble(splitedLine[0]);
        inputField.setValue(new BigDecimal(inputNumber));
        for (UnaryOperation operation : calculator.getOperations()) {
            if (operation.toString().equals(splitedLine[1])) {
                operationSelect.setValue(operation);
            }
            return;
        }
    }
}
