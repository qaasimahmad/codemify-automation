import { validateWordList, isPalindrome } from './utils';

//Find All Palindromes in an Array
// Write a function to find all the palindromes in an array of strings.

// eslint-disable-next-line no-unused-vars
function findPalindromes(wordList){
  if(arguments.length < 1){
    return {
      success: false,
      message: "Invalid input! Expect One Param. Found none"
    }
  }

  const validatorResponse = validateWordList(wordList);

  if(!validatorResponse.success){
    return validatorResponse;
  }

  const palindromes = wordList.filter((element)=> isPalindrome(element) === true);

  return palindromes;
}

// Usage examples:
// console.log(findPalindromes(["racecar", "hello", "madam", "world"])); // ["racecar", "madam"]
// console.log(findPalindromes(["noon", "deed", "civic"])); // ["noon", "deed", "civic"]
// console.log(findPalindromes(["apple", "banana", "cherry"])); // []