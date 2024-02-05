function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operation) {
    if (operation === "add") {
        return add(num1, num2);
    } else if (operation === "subtract") {
        return subtract(num1, num2);
    } else if (operation === "multiply") {
        return multiply(num1, num2);
    } else if (operation === "divide") {
        return divide(num1, num2);
    }
}