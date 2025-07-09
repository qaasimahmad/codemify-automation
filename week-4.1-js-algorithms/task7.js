const utils = require('./utils');

function findOddNumbers(numbers){
    const validatorResponse = utils.validateNumberList(numbers);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const oddNumbers = numbers.filter((element)=>{
        return element % 2 !== 0;
    });

    return oddNumbers;
}