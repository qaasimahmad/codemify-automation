const utils = require('./utils');

function findPalindromes(wordList){
    if(!wordList) return 'Invalid input! One param needed. found none';

    const validatorResponse = utils.validateWordList(wordList);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const palindromes = wordList.filter((element)=> utils.isPalindrome(element) === true);

    return palindromes;
}