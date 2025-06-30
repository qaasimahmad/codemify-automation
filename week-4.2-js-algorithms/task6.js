const utils = require("./utils");

function findLongestSubstringWithoutRepeats(word){
    if(!word || word === undefined || word === null){
        return "Expecting a param! found none";
    }

    if(typeof word !== 'string'){
        return `invalid input! Expect a staring found ${typeof word}`
    }

    let trimmedWord = "";

    const hasSpace = /\s+/g.test(word);

    if(hasSpace){
        trimmedWord = word.replace(/\s+/g, '');
    }

    let chunks = [];
    let chunkSize = 3;
    const wordList = trimmedWord.split("");
    const uniqueWordSet = new Set([...wordList]);
    const uniqueWordList = [...uniqueWordSet].join("");

    for(let i = 0; i < uniqueWordList.length; i += chunkSize){
        chunks.push(uniqueWordList.substring(i, i + chunkSize));
    }
    const longestChunk = utils.getLargestListItem(chunks);
    return longestChunk.length;
}