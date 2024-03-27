#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let pin = 12345;
let isConfirm = false;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter Your Pin Code",
        type: "number"
    }]);
if (pinAnswer.pin === pin) {
    console.log("You Entered the Correct Pin Code!");
    isConfirm = true;
}
else {
    console.log(`You Entered the Wrong Pin Code: ${pinAnswer.pin}`);
}
if (isConfirm) {
    let operatorAnswer = await inquirer.prompt([{
            name: "operator",
            message: "Select One Options",
            type: "list",
            choices: ["Withdraw", "Check Balance", "FastCash"]
        }]);
    if (operatorAnswer.operator === "Withdraw") {
        let amountAnswer = await inquirer.prompt([{
                name: "amount",
                message: "Enter The Amount You Want To Withdraw",
                type: "number",
            }]);
        if (amountAnswer.amount <= mybalance) {
            mybalance -= amountAnswer.amount;
            console.log(`Now Your Balance Is ${mybalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operatorAnswer.operator === "Check Balance") {
        console.log(`Your current balance is ${mybalance}`);
    }
    else if (operatorAnswer.operator === "FastCash") {
        let PriceAnswer = await inquirer.prompt([{
                name: "amount",
                message: "Please Select Amount",
                type: "list",
                choices: ["5000", "3000", "2000", "1000"]
            }]);
        if (PriceAnswer.amount <= mybalance) {
            mybalance -= PriceAnswer.amount;
            console.log(`Now Your Balance Is ${mybalance}`);
        }
    }
}
else {
    console.log("Your Pin Code Is Incorrect");
}
