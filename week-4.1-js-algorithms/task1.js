const utils = require('./utils');

function squareNumbers(numbers){
    if(!numbers) return 'Invalid input! One param needed. found none';

    const validatorResponse = utils.validateNumberList(numbers);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const squaredNumbers = numbers.map((element)=>{
        return Math.pow(element, 2);
    });

    return squaredNumbers;
}

console.log(squareNumbers([10, 20, 30, 40, 50]));