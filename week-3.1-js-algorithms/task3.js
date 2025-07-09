let assert = require('assert');
function checkGreaterTen(value){
    assert.strictEqual(typeof value, 'number', 'Only a number is allowed');
    return value > 10 ? "Greater than 10" : "Not greater than 10";
}