
// Function declaration
console.log("Function declaration: ");

function bigSumFunctionDeclaration(number1, number2) {
    const sum = Math.pow((Math.pow(number1, 2)) + (Math.pow(number2, 2)), 2)
    return sum
}

console.log(bigSumFunctionDeclaration(2, 3));


// Function expression
console.log("Function expression: ");

const bigSumFunctionExpression = function (number1, number2) {
    const sum = Math.pow((Math.pow(number1, 2)) + (Math.pow(number2, 2)), 2)
    return sum
};

console.log(bigSumFunctionExpression(2, 3));


// Arrow Function
console.log("Arrow Function: ");

const bigSumArrowFunction = (number1, number2) => {
    const sum = Math.pow((Math.pow(number1, 2)) + (Math.pow(number2, 2)), 2)
    return sum
};

console.log(bigSumArrowFunction(2, 3));
