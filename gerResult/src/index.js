function getResult (firstNumber, secondNumber, mathSign = '+') {
    if (typeof(firstNumber) === 'number' && typeof(secondNumber) === 'number') {
        switch (mathSign) {
        case '+':
            return firstNumber + secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default:
            return 'Измените знак!';
        }
    } else {
        return 'Неверное выражение!';
    }
}

getResult(5, 111, "/"); // eslint-disable-line 