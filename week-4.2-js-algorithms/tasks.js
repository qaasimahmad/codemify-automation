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

//Find All Palindromes in an Array
// Write a function to find all the palindromes in an array of strings.
function findPalindromes(wordList){
    if(arguments.length < 1) {
        return {
            success: false,
            message: 'Invalid input! Expect One Param. Found none'
        }
    }

    const validatorResponse = utils.validateWordList(wordList);

    if(!validatorResponse.success){
        return validatorResponse;
    }

    const palindromes = wordList.filter((element)=> utils.isPalindrome(element) === true);

    return palindromes;
}
//console.log(findPalindromes(["racecar", "hello", "madam", "world"])); // ["racecar", "madam"]
// console.log(findPalindromes(["noon", "deed", "civic"])); // ["noon", "deed", "civic"]
// console.log(findPalindromes(["apple", "banana", "cherry"])); // []


function flattenArray(randomList){
    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

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

// Challenge 5: Remove Specific Elements
// Write a function that takes an array and a value, and returns a new array with all occurrences of that value removed.
function removeSpecificElement(randomList, searchParam){
    if(arguments.length < 2){
        return {
            success: false,
            message: `Invalid Input! Expected 2 arguments. Found ${arguments.length}`
        }
    }

    if(!Array.isArray(randomList)){
        return {
            success: false,
            message: "Invalid Input! list must be an array"
        }
    }

    if(Array.isArray(searchParam)){
        return {
            success: false,
            message: "Invalid input! search params cannot be a list"
        }
    }
    
    const filteredList = randomList.filter((element)=> element !== searchParam);
    return filteredList;
}

// Usage examples:
// console.log(removeSpecificElement([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 4]
// console.log(removeSpecificElement(["a", "b", "c", "b"], "b")); // ["a", "c"]
// console.log(removeSpecificElement([5, 6, 7], 8)); // [5, 6, 7]


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
function findLongestSubstringWithoutRepeats(s) {
    if (typeof s !== 'string') {
        return "Invalid input! Expected a string.";
    }

    let seenChars = new Set();
    let start = 0;
    let maxLength = 0;
    let longestSubstring = "";

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // While we have a duplicate, shrink window from the left
        while (seenChars.has(currentChar)) {
            seenChars.delete(s[start]);
            start++;
        }

        // Add current character to the set
        seenChars.add(currentChar);

        // Check if this is the longest so far
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstring = s.slice(start, end + 1);
        }
    }

    return longestSubstring;
}

// Challenge 6: Find the Longest Substring Without Repeating Characters
// Write a function that takes a string and returns the length of the longest substring without repeating characters.

function findLongestSubstringWithoutRepeats(words) {
    if (!word) {
        return "Expecting a param! found none";
    }

    if (typeof word !== 'string') {
        return `Invalid input! Expecting a string, found ${typeof word}`;
    }

    // Remove spaces if needed
    word = word.replace(/\s+/g, '');

    let seen = new Set();
    let maxLen = 0;
    let start = 0;

    for (let end = 0; end < word.length; end++) {
        while (seen.has(word[end])) {
            seen.delete(word[start]);
            start++;
        }
        seen.add(word[end]);
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}

// Usage examples:
// console.log(findLongestSubstringWithoutRepeats("abcabcbb")); // 3 ("abc")
// console.log(findLongestSubstringWithoutRepeats("bbbbb")); // 1 ("b")
// console.log(findLongestSubstringWithoutRepeats("pwwkew")); // 3 ("wke")



// Challenge 7: Check If All Elements Are Unique
// Write a function that checks if all elements in an array are unique.

function areAllElementsUnique(randomList){
    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

    const isDuplicateFound = utils.checkForDuplicates(randomList);
    return isDuplicateFound;
}

// Usage examples:
// console.log(areAllElementsUnique([1, 2, 3, 4, 5])); // true
// console.log(areAllElementsUnique(["a", "b", "c", "a"])); // false
// console.log(areAllElementsUnique([10, 20, 30, 40, 50])); // true


// Challenge 8: Find the Most Frequent Element
// Write a function that finds the most frequent element in an array.

function findMostFrequentElement(randomList){
    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

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

// Usage examples:
// console.log(findMostFrequentElement([1, 2, 3, 2, 4, 2])); // 2
// console.log(findMostFrequentElement(["a", "b", "c", "b", "b"])); // "b"
// console.log(findMostFrequentElement([5, 5, 5, 6, 6, 7])); // 5


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

    randomList1.push(...randomList2);
    return randomList1;
}


