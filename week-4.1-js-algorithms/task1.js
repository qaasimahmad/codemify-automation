const utils = require('./utils');

function longestString(wordList){
    if(!wordList) return 'Invalid input! One param needed. found none';

    const validatorResponse = utils.validateWordList(wordList);

    if(!validatorResponse.success){
        return validatorResponse.message;
    } 
    let initialLength = wordList[0].length;
    let tempLongest = wordList[0];
    
    for(let i=0; i< wordList.length;i++){
        if(wordList[i].length > initialLength){
        tempLongest = wordList[i];
        }
    }
  // OR
    // const longest = wordList.reduce((longestSoFar, current)=>{
    //     return current.length > longestSoFar.length ? current : longestSoFar;  
    // })
    // return longest;

    return tempLongest;
}