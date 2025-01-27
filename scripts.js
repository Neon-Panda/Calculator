const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1 = ""
let num2 = ""
let operator = ""
let sum = ""

const operate = (num2, operator, num1) => {
    if (operator === "+") {
        return add(num1, num2)
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply(num1, num2)
    } else if (operator === "/") {
        return divide(num1, num2)
    }
}

const limitSumSize = (sum) => {
    if (sum.toString().length > 9) {
        scientific = sum.toExponential()
        return sum.toPrecision(4);
    } else {
        return sum}
}

const clearDisplay = () => {
    num1 = "", num2 = "", operator = "", sum = "";
    display.textContent = ""
}

let display = document.querySelector(".display");

let container = document.querySelectorAll("button");
container.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.className === "operand" && num1.length < 9) {
            num1 += button.textContent
            display.textContent = num1
        } else if (button.className == "operator" || button.className == "equals") {
            if (num2) {
                sum = operate(num1, operator, num2)
                num1 = sum
                display.textContent = limitSumSize(sum)
            } else {
            operator = button.textContent
            display.textContent = operator
            }
            num2 = num1
            num1 = ""
        } else if (button.className === "clear") {
            clearDisplay()
        } else if (button.className === "backspace") {
            let array
            if (sum) {
                sumString = sum.toString() 
                array = sumString.split("");
                array.pop()
                sum = array.join("")
                display.textContent = limitSumSize(sum);
            } else {
                array = num1.split("");
                array.pop()
                num1 = array.join("")
                display.textContent = num1;
            }
        }
    })
})