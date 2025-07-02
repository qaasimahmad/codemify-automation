const utils = require('./utils');

function findNumbersGreaterThanTen(numbers){
    if(arguments.length < 1) return 'Invalid input! One param needed. found none';

    if(numbers.length === 0){
        return {
            success: false,
            message: "Empty array! Please provide at least one number."
        };
    }

    const validatorResponse = utils.validateNumberList(numbers);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const filteredNumbers = numbers.filter((item)=> item > 10);
    return filteredNumbers;
}