const moment = require('moment');

let date = moment();

// console.log(date.add('1','year').format('MMM Do, YYYY a'))
console.log(date.subtract('5', 'hours').format('H:mm a'))