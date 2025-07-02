const utils = require('./utils');

function longestString(wordList){
    if(arguments.length) return 'Invalid input! One param needed. found none';

    const validatorResponse = utils.validateWordList(wordList);

    if(!validatorResponse.success){
        return validatorResponse.message;
    } 
    
    let tempLongest = wordList[0];
    
    for(let i=0; i< wordList.length;i++){
        if(wordList[i].length > tempLongest.length){
        tempLongest = wordList[i];
        }
    }

    return tempLongest;
}