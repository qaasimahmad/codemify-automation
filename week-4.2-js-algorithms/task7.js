const utils = require("./utils");

function areAllElementsUnique(randomList){
    if(randomList === undefined || randomList === null){
        return `Expecting a list of items! Found ${randomList}`;
    }

    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

    const isDuplicateFound = utils.checkForDuplicates(randomList);
    return isDuplicateFound;
}