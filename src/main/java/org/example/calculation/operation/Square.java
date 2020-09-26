package org.example.calculation.operation;

public class Square extends UnaryOperation {

    public Square(){
        setName("Square");
    }
    @Override
    public double calculate(double value) {
        return Math.pow(value,2);
    }

}
