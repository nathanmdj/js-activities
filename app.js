const addition = (x, y) => x + y;
const subtraction = (x, y) => x - y;
const multiplication = (x, y) => x * y;
const division = (x, y) => (y !== 0 ? x / y : "Cannot divide by zero");

const calculate = () => {
    const num1 =parseFloat(document.getElementById('num1').value);
    const num2 =parseFloat(document.getElementById('num2').value);
    let result = '';
    if (isNaN(num1) || isNaN(num2)){
        alert('Invalid input! Please enter a valid number.')
    } else {
        result = `
            Addition: ${addition(num1, num2)} <br/>
            Subtraction: ${subtraction(num1, num2)} <br/>
            Multiplication: ${multiplication(num1, num2)} <br/>
            Division: ${division(num1, num2)}
            `;
    }

    document.getElementById('result').innerHTML = result;
    console.log(result)
}

