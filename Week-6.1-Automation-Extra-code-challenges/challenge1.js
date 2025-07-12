/* eslint-disable no-unused-vars */
// Challenge 1: Find the Largest Palindrome
// Write a function to find the largest palindrome made from the product of any two numbers between 0 and 1000

function isPalindrome(word){
  const wordStr = word.toString();
  const reversedWord = wordStr.split("").reverse().join("");

  return wordStr === reversedWord;
}

function getLargestPalindrome(maxNum){
  let maxPalindrome = 0;

  for (let i = maxNum; i >= 0; i--){
    for (let j = i; j >= 0; j--){
      let product = i *j;
      if(product <= maxPalindrome) break;

      if(isPalindrome(product)){
        maxPalindrome = product;
      }
    }
  }
  return maxPalindrome;
}

// Usage examples:
// console.log(getLargestPalindrome(1000)); // 906609
