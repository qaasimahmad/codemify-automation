const utils = require('./utils');

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