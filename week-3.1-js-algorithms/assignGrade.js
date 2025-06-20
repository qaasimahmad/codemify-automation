let assert = require('assert');
function assignGrade(score) {

    assert.strictEqual(typeof score, 'number', 'Only a number is allowed');
    assert.ok(score >= 0 && score <= 100, `Expected score ${score} to be within range [0, 100]`);

    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade;
}

console.log(assignGrade(101));