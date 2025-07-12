let num = 18;

function factorialCalculator(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);