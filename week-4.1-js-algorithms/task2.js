const utils = require('./utils');

function concatenateElements(wordList){
    if(!wordList) return 'Invalid input! One param needed. found none';

    const validatorResponse = utils.validateWordList(wordList);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const joinedWords = wordList.reduce((wordSofar, current)=> {
        return wordSofar+current;
    });

    return joinedWords;
}

console.log(concatenateElements(["I", "love", "JavaScript"]));