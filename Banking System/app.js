

let withdrawMax = 100000;
let withdrawMin = 50;
let operation;
let accs = new Array();
let balance;


let ac1 = {
    name: "Account1",
    balance: 13
}

let ac2 = {
    name: "Account2",
    balance: 100
}

let getAcc = function (accName) {
    if (accName === 'Account1') {
        return ac1;
    } else if (accName === 'Account2') {
        return ac2;
    } else {
        console.log("Invalid input")
    }
}

let deposit = function (balance, amount) {
    balance += parseInt(amount);
    return balance;
};

let withdraw = function (balance, amount) {
    if (amount > withdrawMax) {
        console.log("Maximum limit for withdrawal is 100000.")
        return balance;
    } else if (amount < withdrawMin) {
        console.log(" You are required to withdraw a minimum of 50.")
        return balance;
    } else {
        balance -= amount;
        return balance;
    }
};


let statment = function (acc) {
    return acc.balance;
};

let transfer = function (acc1, acc2, amnt) {



    acc1.balance = acc1.balance - parseInt(amnt);
    acc2.balance = acc2.balance + parseInt(amnt);

    return acc1, acc2;


};








(function () {



    operation = prompt("Choose operation: ");


    switch (operation) {
        case 'deposit':
            q = prompt("Enter account name: ");
            acc = getAcc(q);
            amnt = prompt("Enter amount: ");
            acc.balance = deposit(acc.balance, amnt);
            console.log("Current balance is", acc.balance);
            break;

        case 'statment':
            q = prompt("Enter account name: ");
            acc = getAcc(q);
            console.log("Current balance is", acc.balance);
            break;

        case 'withdraw':
            q = prompt("Enter account name: ");
            acc = getAcc(q);
            amnt = prompt("Enter amount: ");
            acc.balance = withdraw(acc.balance, amnt);
            console.log("Current balance is", acc.balance);

            break;

        case 'transfer':
            q1 = prompt("Enter account name: ");
            acc1 = getAcc(q1);
            q2 = prompt("Enter second account name: ");
            acc2 = getAcc(q2);

            amnt = prompt("Enter amount: ");
            acc1, acc2 = transfer(acc1, acc2, amnt);
            console.log("Account1 balance is", acc1.balance);
            console.log("Account2 balance is", acc2.balance);

            break;



        default: console.log("Invalid input");


    }

})();