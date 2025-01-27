const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1
let num2
let operator

const operate = (num1, operator, num2) => {
    if (operator === "+") {
        add(num1, num2)
    } else if (operator === "-") {
        subtract(num1, num2)
    } else if (operator === "*") {
        multiply(num1, num2)
    } else if (operater === "/") {
        divide(num1, num2)
    }
}

let display = document.querySelector(".display");

let container = document.querySelectorAll("button");
container.forEach((button) => {
    button.addEventListener("click", () => {
        if (num1 === undefined && button.className === "operand") {
            num1 = button.textContent
            display.textContent = num1
        } else if (operator === undefined && button.className == "operator") {
            operator = button.textContent
            display.textContent = operator
        } else if (num2 === undefined && button.className === "operand") {
            num2 = button.textContent
            display.textContent = num2
        }
    })
})