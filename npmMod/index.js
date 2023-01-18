var validator = require('validator');
const chalk = require('chalk');

// console.log(chalk.blue("hello"));
const res = validator.isEmail('foo@ba@r.c.om'); //=> true
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));
