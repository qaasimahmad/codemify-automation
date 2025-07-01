const utils = require('./utils');

function findSecondLargestNumber(numbers){
    if(numbers.length === 0){
        return {
            success: false,
            message: "Empty array! Please provide at least one number."
        };
    }

    const validatorResponse = utils.validateNumberList(numbers);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const noDuplicateNumbers = [...new Set(numbers)];

    noDuplicateNumbers.sort((a, b) => b - a);

    return noDuplicateNumbers[1];
}


function findPalindromes(wordList){
    if(!wordList) return 'Invalid input! One param needed. found none';

    const validatorResponse = utils.validateWordList(wordList);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const palindromes = wordList.filter((element)=> utils.isPalindrome(element) === true);

    return palindromes;
}


function flattenArray(randomList){
    if(randomList === undefined || randomList === null){
        return `Expecting a list of items! Found ${randomList}`;
    }

    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

    /* First Approach 

    const flattenedArray = randomList.reduce((arraySoFar, current)=>{
         if(!Array.isArray(current)){
             current = [current];
         }

         const mergedSet = new Set([...arraySoFar, ...current]);
         return [...mergedSet];
     }, []);

    return flattenedArray;

    Challenge: Only works fine for one level deep array, not nested
    */


    /* Improvement on the First Approach 
    
    const flattenedArray = randomList.reduce((arraySoFar, current)=>{
        if(Array.isArray(current)){
        acc.push(...flattenArray(current))
        } else{
         acc.push(current)
        }
        return acc;
    }, [[]])
    */


    let flattenedArray = [];

    for(let item of randomList){
        if(Array.isArray(item)){
            const flatItem = flattenArray(item);
            flattenedArray.push(...flatItem);
        } else{
            flattenedArray.push(item);
        }
    }

    return flattenedArray;
}


function findCommonElements(randomList1, randomList2){
    if(arguments.length < 2){
        return `Invalid Input! Expected 2 arguments. Found ${arguments.length}`;
    }
    
    if(!Array.isArray(randomList1) || !Array.isArray(randomList2)){
        return "Invalid Input! list must be an array"
    }

    let intersectList = [];

    // Solution 1
    for(let i = 0; i < randomList1.length; i++){
        for(let j = 0; j < randomList2.length; j++){
            if(randomList1[i] === randomList2[j]){
                intersectList.push(randomList1[i]);
            }
        }
    }

    return intersectList;


    /*Solution 2
    const randomSet1 = new Set([...randomList1]);
    const randomSet2 = new Set([...randomList2]);
    const intersect = randomSet1.intersection(randomSet2);
    return [...intersect]; 
    */  
}


function removeSpecificElement(randomList, searchParam){
    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

    if(Array.isArray(searchParam)){
        return "Invalid input! search params cannot be a list"
    }

    
    const filteredList = randomList.filter((element)=> element !== searchParam);
    return filteredList;
}


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


function areAllElementsUnique(randomList){
    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

    const isDuplicateFound = utils.checkForDuplicates(randomList);
    return isDuplicateFound;
}


function findMostFrequentElement(randomList){
    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

    //Solution before checking with  AI
    /* 
    let found = {
        key: "",
        value: 0
    };
    let maxCount = 0;
    let mostFrequent = randomList[0];

    for(const item of randomList){
        found['key'] = item;
        found['value'] = found['value'] + 1;

        if(found['value'] > maxCount){
            maxCount = found['value'];
            mostFrequent = found['key'];
        }
    }

    return mostFrequent;

    Issues Found
    - using a single object (found) to track counts, so it does not store separate counts per item.
    - globally incrementing found.value, not per unique element.
    - There is no object or map to count individual occurrences.
    */
    
//Modified solution after checking with AI
    const found = {};
    let maxCount = 0;
    let mostFrequent = randomList[0];

    for(const item of randomList){
        found[item] = (found[item] || 0) + 1;

        if (found[item] > maxCount) {
            maxCount = found[item];
            mostFrequent = item;
        }
    }

    return mostFrequent;
    
}


function findIntersection(randomList1, randomList2){
    if(!Array.isArray(randomList1) || !Array.isArray(randomList2)){
        return "Invalid Input! list must be an array"
    }

    const intersects = utils.findListsIntersect(randomList1, randomList2);

    return intersects;
}


function mergeArrays(randomList1, randomList2){
    if(!Array.isArray(randomList1) || !Array.isArray(randomList2)){
        return "Invalid Input! list must be an array"
    }
    /*solution 1

    const newList = [...randomList1, ...randomList2];
    return newList;

    - Challenge: Not ideal if array is large, it will be keeping a copy of the arrays in memory 
    */

    // Solution 2: Directly mutates the first array and does not hold a new array in memory

    randomList1.push(...randomList2);
    return randomList1;
}


