package org.example.tasks;

public class ExpandedFormTask extends Task {

    @Override
    public String doTask(String input) {
        int inputInt = Integer.parseInt(input);
        StringBuilder builder = new StringBuilder();
        while (inputInt >= 10) {
            builder.insert(0, " + ").insert(0, inputInt % 10);
            inputInt = inputInt / 10;
        }
        builder.insert(0, inputInt);
        return builder.toString();
    }

    @Override
    public String toString() {
        return "Expanded";
    }
}
