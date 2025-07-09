import { strictEqual } from 'assert';
// eslint-disable-next-line no-unused-vars
function checkGreaterTen(value){
  strictEqual(typeof value, 'number', 'Only a number is allowed');
  return value > 10 ? "Greater than 10" : "Not greater than 10";
}