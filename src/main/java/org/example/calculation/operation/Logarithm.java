package org.example.calculation.operation;


public class Logarithm extends UnaryOperation {
    private double base;

    public Logarithm(double base) {
        this.base = base;
        setName("Logarithm on base " + base);
    }

    public double getBase() {
        return base;
    }

    public void setBase(double base) {
        this.base = base;
        setName("Logarithm on base " + base);
    }

    @Override
    public double calculate(double value) {
        return Math.log(value) / Math.log(base);
    }
}
