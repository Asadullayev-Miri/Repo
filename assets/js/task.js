function calc(num1, method, num2) {
    switch (method) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return console.log("It impossible divide by zero");
            }
            default:
                console.log("Please check the sent arguments again it must be some mistake there!")
                break;
    }
}

console.log(calc(5, "/", 5));
