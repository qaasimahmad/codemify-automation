const utils = require('./utils');

function findEvenNumbers(numbers){
    const validatorResponse = utils.validateNumberList(numbers);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const evenNumbers = numbers.filter((element)=>{
        return element % 2 == 0;
    });

    return evenNumbers;
}