package org.example.tasks;

public class ExpandedFormTask extends Task {

    @Override
    public String doTask(String input) throws NumberFormatException {
        Integer inputInt = Integer.parseInt(input);
        StringBuilder builder = new StringBuilder();
        int k = 0;
        while (inputInt >= 10) {
            int digit = inputInt % 10;
            if (digit != 0) {
                builder.insert(0, digit * (int) Math.pow(10, k)).insert(0, " + ");
            }
            inputInt = inputInt / 10;
            k++;
        }
        builder.insert(0, inputInt * (int) Math.pow(10, k));
        return builder.toString();
    }

    @Override
    public String toString() {
        return "Expanded";
    }
}
