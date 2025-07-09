import { strictEqual, ok } from 'assert';
// eslint-disable-next-line no-unused-vars
function assignGrade(score){

  strictEqual(typeof score, 'number', 'Only a number is allowed');
  ok(score >= 0 && score <= 100, `Expected score ${score} to be within range [0, 100]`);

  let grade;
  if(score >= 90){
    grade = 'A';
  } else if(score >= 80){
    grade = 'B';
  } else if(score >= 70){
    grade = 'C';
  } else if(score >= 60){
    grade = 'D';
  } else {
    grade = 'F';
  }
  return grade;
}