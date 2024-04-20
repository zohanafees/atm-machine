#! /usr/bin/env node

import inquirer from "inquirer";
const $myPin = 1234;
let $totalBalance = 10000;
const $pin = await inquirer.prompt({
  name: "inputPin",
  message: "Enter your PIN: ",
  type: "number",
});

if ($pin.inputPin === $myPin) {
  const $choose = await inquirer.prompt({
    name: "chooseFrom",
    message: "What do you want to do?",
    type: "list",
    choices: ["withdraw", "checkBalance"],
  });
  if ($choose.chooseFrom === "withdraw"){
    const $withdrawAmount = await inquirer.prompt({
    name: "withdrawAns",
    message: "Enter your withdraw amount: ",
    type: "number"
  })
  $totalBalance = $totalBalance - $withdrawAmount.withdrawAns
  console.log("Your remaining balance is: " + $totalBalance)
}
else if ($choose.chooseFrom === "checkBalance"){
    console.log("Your current balance is: " + $totalBalance)
}
} else {
  console.log("wrong pin");
}
