package org.example.tasks;

import java.util.Collections;
import java.util.LinkedList;

public class SubstringFinderTask extends Task {

    public LinkedList<String> findSubstrings(String[] firstStringArray, String[] secondStringArray) {
        LinkedList<String> result = new LinkedList<>();
        for (String str1 : firstStringArray) {
            if (result.indexOf(str1) == -1) {
                for (String str2 : secondStringArray) {
                    if (str2.contains(str1)) {
                        result.add(str1);
                        break;
                    }
                }
            }
        }
        Collections.sort(result);
        return result;
    }

    public String toString() {
        return "Substrings";
    }

    @Override
    public String doTask(String input) throws IllegalArgumentException {
        String[] arrays = input.split(",");
        if (arrays.length != 2) throw new IllegalArgumentException("Invalid input string!");
        else {
            String[] firstStringArray = arrays[0].split(" ");
            String[] secondStringArray = arrays[1].split(" ");

            StringBuilder builder = new StringBuilder();
            LinkedList<String> strings = findSubstrings(firstStringArray,secondStringArray);
            for (String str : strings) {
                builder.append(str).append(" ");
            }
            return builder.toString();
        }
    }
}
