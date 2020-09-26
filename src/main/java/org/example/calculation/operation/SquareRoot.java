package org.example.calculation.operation;

public class SquareRoot extends UnaryOperation {
    public SquareRoot(){
        setName("Square Root");
    }
    @Override
    public double calculate(double value) {
        return Math.sqrt(value);
    }
}
