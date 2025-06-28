const utils = require('./utils');

function findLargestNumber(numbers){
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
    const largestNumber = numbers.reduce((largestSoFar, current)=> current > largestSoFar ? current : largestSoFar);
    return largestNumber;
}