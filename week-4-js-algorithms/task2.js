const utils = require('./utils');

function findLargestNumber(numbers){
    if(arguments.length) return 'Invalid input! One param needed. found none';

    const validatorResponse = utils.validateNumberList(numbers);

    if(!validatorResponse.success){
        return validatorResponse.message;
    } 
    
    const largestNumber = numbers.reduce((largestSoFar, current)=> current > largestSoFar ? current : largestSoFar);
    return largestNumber;
}