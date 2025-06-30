const utils = require('./utils');

function squareNumbers(numbers){
    const validatorResponse = utils.validateNumberList(numbers);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const squaredNumbers = numbers.map((element)=>{
        return Math.pow(element, 2);
    });

    return squaredNumbers;
}


function concatenateElements(wordList){
    const validatorResponse = utils.validateWordList(wordList);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const joinedWords = wordList.reduce((wordSofar, current)=> {
        return wordSofar+current;
    });

    return joinedWords;
}


function reverseArray(randomList){
    if(!(Array.isArray(randomList))){
        return `Invalid input! Expected an array. Found ${typeof randomList}`
    }

    let finalList = [];

    for(let i = randomList.length -1; i >= 0; i-- ){
        finalList.push(randomList[i]);
    }
    return finalList;
}


function containsElement(randomList, searchElement){
    if(!(Array.isArray(randomList))){
        return `Invalid input! Expected an array. Found ${typeof randomList}`
    }

    if(!searchElement){
        return "Misisng Param! A search Element must be passed";
    }

    return randomList.includes(searchElement);
}


function removeDuplicates(randomList){
    if(randomList === undefined || randomList === null){
        return `Expecting a list of items! Found ${randomList}`;
    }

    const sanitizedSet  = new Set(randomList);

    const  sanitizedList = [...sanitizedSet];

    return sanitizedList;
}


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

