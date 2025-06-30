const utils = require('./utils');

function longestString(wordList){
    if(!wordList) return 'Invalid input! One param needed. found none';

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
  // OR
    // const longest = wordList.reduce((longestSoFar, current)=>{
    //     return current.length > longestSoFar.length ? current : longestSoFar;  
    // })
    // return longest;

    return tempLongest;
}


function findLargestNumber(numbers){
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
    
    const largestNumber = numbers.reduce((largestSoFar, current)=> current > largestSoFar ? current : largestSoFar);
    return largestNumber;
}


function findDollarStrings(list){
    if(!list) return 'Invalid input! One param needed. found none';

    const validatorResponse = utils.validateWordList(list);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }
    
    const regex = /\$/g;
    const found = list.filter((item)=> item.match(regex));

    return found;
}


function findNumbersGreaterThanTen(numbers){
    if(!numbers) return 'Invalid input! One param needed. found none';

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

    const filteredNumbers = numbers.filter((item)=> item > 10);
    return filteredNumbers;
}


function sumNumbers(numbers){
    if(!numbers) return 'Invalid input! One param needed. found none';

    const validatorResponse = utils.validateNumberList(numbers);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const sum = numbers.reduce((numberSofar, current)=>current + numberSofar, 0);

    return sum;
}


function factorial(number){

    number = Number(number);


    if (isNaN(number)) {
        return "Invalid input; input must be a number";
    }

    if(number < 0){
        return "Invalid input; input must be more than 0"
    }

    if(number === 0 || number === 1){
        return 1;
    }

    return number * factorial(number - 1);
}


function convertNumbersToStrings(numbers){
    if(!numbers) return 'Invalid input! One param needed. found none';

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

    const stringifiedNumbers = numbers.map((item)=>{
        return item.toString();
    });

    return stringifiedNumbers;
}


const min = 1;
const max = 100;

for(let i = min; i < max; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}


function findLongestWord(word){
    if(word === null) return "invalid input! expected a param. found none";

    if(typeof word != 'string') return "Type Error! input must be a String";

    if(word === ''){
        return 0;
    }

    const hasSpace = /\s/.test(word);
    if(!hasSpace){
        return word.length;
    }


    const wordArray = word.split(' ');

    const longestWord = wordArray.reduce((wordSofar, current)=> current.length > wordSofar.length ? current : wordSofar);
    return longestWord.length;
}


function palindrome(word){
    if(!word) return "expected a param. Found none";

    // const wordArray = word.split("");
    // const reversedWord = wordArray.reverse().join("");

    // return word === reversedWord;

    let reversed = "";

    for(let i = word.length -1; i >=0; i--){
        reversed += word[i];
    }

    return reversed === word;
}
