const operator = prompt('Enter operation Add, Sub, Mul, Div: ');
const number1 = parseInt(prompt('Enter first number: '));
const number2 = parseInt(prompt('Enter second number: '));

let result;

if (operator == 'add') {
    result = number1 + number2;
}
else if (operator == 'sub') {
    result = number1 - number2;
}
else if (operator == 'mul') {
    result = number1 * number2;
}
else if (operator == 'div') {
    result = number1 / number2;
}

console.log(`${result}`);