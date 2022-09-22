
const uuidv1 = require('uuid/v1');

var uuidArray = uuidv1().split('-');

var newId = uuidArray[0] + uuidArray[1] + uuidArray[4];

console.log(newId);