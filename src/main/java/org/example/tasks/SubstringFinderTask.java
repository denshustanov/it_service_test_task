package org.example.tasks;

import java.util.LinkedList;

public class SubstringFinderTask extends Task {

    public LinkedList<String> findSubstrings(String[] firstStringArray, String[] secondStringArray) {
        LinkedList<String> result = new LinkedList<>();
        for (String str1 : firstStringArray) {
            if (result.indexOf(str1) != -1) {
                for (String str2 : secondStringArray) {
                    if (str2.contains(str1)) {
                        for (int i = 0; i < result.size(); i++) {
                            if (result.get(i).compareTo(str1) < 0) {
                                result.add(i + 1, str1);
                            }
                        }
                    }
                }
            }
        }
        return result;
    }

    public String toString() {
        return "Substrings";
    }

    @Override
    public String doTask(String input) throws IllegalArgumentException {
        String[] arrays = input.split("\\s+");
        if (arrays.length != 2) throw new IllegalArgumentException("Invalid input string!");
        else {
            String[] firstStringArray = arrays[0].substring(1, arrays[0].length() - 1).split("[,]");
            String[] secondStringArray = arrays[1].substring(1, arrays[1].length() - 1).split("[,]");
            StringBuilder builder = new StringBuilder();
            LinkedList<String> strings = findSubstrings(firstStringArray,secondStringArray);
            for (String str : strings) {
                builder.append(str).append(" ");
            }
            return builder.toString();
        }
    }
}
