package org.example.calculation;

import org.example.calculation.operation.UnaryOperation;

import java.util.ArrayList;

public class Calculator {
    private ArrayList<UnaryOperation> operations = new ArrayList<UnaryOperation>();
    private UnaryOperation currentOperation;

    public UnaryOperation getCurOperation() {
        return currentOperation;
    }

    public void setCurrentOperation(UnaryOperation operation) {
        this.currentOperation = operation;
    }

    public void addOperation(UnaryOperation operation){
        operations.add(operation);
    }

    public Double calculate(Double value){
        return currentOperation.calculate(value);
    }

    public ArrayList<UnaryOperation> getOperations(){
        return operations;
    }
}
