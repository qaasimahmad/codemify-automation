 const utils = require('./utils');

function findSecondLargestNumber(numbers){
    if(!numbers) return 'Invalid input! One param needed. found none';

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

    const noDuplicateNumbers = [...new Set(numbers)];

    noDuplicateNumbers.sort((a, b) => b - a);

    return noDuplicateNumbers[1];
}