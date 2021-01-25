
let num1;
let num2;
let nums = new Array();
let operation;
let result;
let q;

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

let checkNumber = function (input) {
    if (isNaN(input)) {
        console.log('Please enter numbers only');
        return;
    } else {
        return input;
    }
};

let acceptNumbers = function () {
    q = checkNumber(prompt("How many numbers will you like to operate on "));
    if (q) {
        for (let i = 0; i < parseInt(q); i++) {
            k = checkNumber(prompt(" Enter number" + (i + 1)));
            if (k) {
                nums[i] = k;
            } else {
                return;
            }
        }
        return nums;
    };

};

let average = function (numbers) {

    const sum = add(numbers);
    const count = numbers.length;
    if (count !== 0) {
        return divide(sum, count);
    } else {
        console.log('Please enter more numbers');
    }

};

let min = function (numbers) {


    if (numbers.length !== 0) {
        return Math.min(...numbers);
    } else {
        console.log('Please enter more numbers');
    }

};

let max = function (numbers) {

    if (numbers.length !== 0) {
        return Math.max(...numbers);
    } else {
        console.log('Please enter more numbers');
    }

};


(function () {



    operation = prompt("Choose operation: ");


    switch (operation) {
        case 'add':
            nums = acceptNumbers();
            if (nums) {
                result = add(nums);
                console.log(result);
            }


            break;

        case 'multiply':

            nums = acceptNumbers();
            if (nums) {
                result = multiply(nums);
                console.log(result);
            }

            break;

        case 'subtract':
            num1 = checkNumber(prompt("Enter first number: "));
            num2 = checkNumber(prompt("Enter second number: "));

            result = subtract(num1, num2);
            console.log(result);
            break;

        case 'divide':
            num1 = checkNumber(prompt("Enter first number: "));
            num2 = checkNumber(prompt("Enter second number: "));

            result = divide(num1, num2);
            console.log(result);
            break;

        case ('average'):
            nums = acceptNumbers();
            if (nums) {
                result = average(nums);
                console.log(result);
            }
            break;
        case ('square'):
            num = checkNumber(prompt("Enter number: "));
            result = Math.pow(num, 2);
            console.log(result);
            break;

        case ('minimum'):
            nums = acceptNumbers();
            if (nums) {
                result = min(nums);
                console.log(result);
            }
            break;

        case ('maximum'):
            nums = acceptNumbers();
            if (nums) {
                result = max(nums);
                console.log(result);
            }
            break;



        default: console.log("Invalid input");


    }

})();