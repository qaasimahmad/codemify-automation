const utils = require('./utils');

function calculateAverage(randomList){

    if(randomList === undefined || randomList === null){
        return `Expecting a list of items! Found ${randomList}`;
    }

    const validatorResponse = utils.validateNumberList(randomList);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const sum = randomList.reduce((numberSoFar, current)=>{
        return (current + numberSoFar);
    });

    return sum/randomList.length;
}