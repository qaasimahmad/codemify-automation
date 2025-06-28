function palindrome(word){
    if(!word) return "expected a param. Found none";

    const wordArray = word.split("");
    const reversedWord = wordArray.reverse().join("");

    return word === reversedWord;
}