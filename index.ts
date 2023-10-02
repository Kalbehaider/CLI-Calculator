import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    type: "number",
    name: "num1",
    message: "Enter the first number: ",
  },
  {
    type: "number",
    name: "num2",
    message: "Enter the second number: ",
  },
  {
    type: "list",
    name: "operator",
    message: "Select the operator you want to perform: ",
    choices: ["Add", "Substract", "Multiply", "Divide"],
  },
]);

let result: number;

switch (answer.operator) {
  case "Add":
    result = answer.num1 + answer.num2;
    console.log("The answer for the addition is: " + result);
    break;

  case "Substract":
    result = answer.num1 - answer.num2;
    console.log("The answer for substraction is: " + result);
    break;

  case "Multiply":
    result = answer.num1 * answer.num2;
    console.log("The answer for multliplication is: " + result);
    break;

  case "Division":
    result = answer.num1 / answer.num2;
    console.log("The Answer for the division is: " + result);
    break;
}
