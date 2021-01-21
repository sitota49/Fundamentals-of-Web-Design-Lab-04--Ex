
let num1;
let num2;
let nums = new Array();
let operation;
let result;

let add = function (nums) {
    let sum = 0;
    nums.forEach(num => {
        sum += parseInt(num)
    });
    return sum;
};

let multiply = function (nums) {
    let prod = 1
    nums.forEach(num => {
        prod *= num
    });
    return prod;

};

let subtract = function (num1, num2) {
    return num1 - num2;
};

let divide = function (num1, num2) {
    if (parseInt(num2) === 0) {
        return "Division by zero is not possible";
    } else {
        return num1 / num2;
    }
};



(function () {



    operation = prompt("Choose operation: ");


    switch (operation) {
        case 'add':
            q = prompt("How many numbers will you like to add ");
            for (let i = 0; i < parseInt(q); i++) {
                nums[i] = prompt(" Enter number" + (i + 1));
            }
            result = add(nums);
            console.log(result);
            break;

        case 'multiply':
            q = prompt("How many numbers will you like to multiply ");
            for (let i = 0; i < parseInt(q); i++) {
                nums[i] = prompt(" Enter number" + (i + 1));
            }
            result = multiply(nums);
            console.log(result);
            break;

        case 'subtract':
            num1 = prompt("Enter first number: ");
            num2 = prompt("Enter second number: ");

            result = subtract(num1, num2);
            console.log(result);
            break;

        case 'divide':
            num1 = prompt("Enter first number: ");
            num2 = prompt("Enter second number: ");

            result = divide(num1, num2);
            console.log(result);
            break;


        default: console.log("Invalid input");


    }

})();