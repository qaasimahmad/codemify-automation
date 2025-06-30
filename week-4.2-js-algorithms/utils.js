const utils = {
    validateWordList: (wordList) => {
        
        if (!Array.isArray(wordList)) {
            return {
                success: false,
                message: "Invalid Input! This function expects an array."
            };
        } else if (wordList.length === 0) {
            return {
                success: false,
                message: "Empty array! Please provide at least one string."
            };
        } else if (!wordList.every(item => typeof item === 'string')) {
            return {
                success: false,
                message: "Type Error! All items in the array must be strings."
            };
        }
        return {
            success: true,
            message: ""
        };
    },
    validateNumberList: (numbers)=>{
        if (!Array.isArray(numbers)) {
            return {
                success: false,
                message: "Invalid Input! This function expects an array and must not be empty."
            };
        } else if (!numbers.every(item => typeof item === "number" && !isNaN(item))) {
            return {
                success: false,
                message: "Type Error! All items in the array must be valid numbers."
            };
        }
        return {
            success: true,
            message: ""
        };
    },
    isPalindrome: (word)=>{
        const wordArray = word.split("");
        const reversedWord = wordArray.reverse().join("");
        return word === reversedWord;
    },
    removeListDuplicates: (list)=>{
        const uniqueList = new Set([...list]);
        return [...uniqueList];
    },
    getLargestListItem: (list)=>{
        const longest = list.reduce((itemSoFar, current)=> current.length > itemSoFar.length ? current : itemSoFar);
        return longest;
    },
    checkForDuplicates: (list)=>{
        return new Set(list).size === list.length;
    },
    findListsIntersect: (list1, list2)=>{
        let intersectList = [];
        for(let i = 0; i < list1.length; i++){
            for(let j = 0; j < list2.length; j++){
                if(list1[i] === list2[j]){
                    intersectList.push(list1[i]);
                }
            }
        }
        return intersectList;
    }

}

module.exports = utils;