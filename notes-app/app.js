const validator = require("validator");
const chalk = require("chalk");
const add = require("./utils.js");

const sum = add(7, 2);
console.log(sum);

//
console.log(chalk.inverse.green(validator.isEmail("egg@isegg.com")));
