package org.example.calculation.operation;

public abstract class UnaryOperation {
    private String name;

    public abstract double calculate(double value);

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString(){
        return name;
    }
}
