const utils = require('./utils');

function calculateAverage(randomList){
    const validatorResponse = utils.validateNumberList(randomList);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const sum = randomList.reduce((numberSoFar, current)=>{
        return (current + numberSoFar);
    });

    return sum/randomList.length;
}