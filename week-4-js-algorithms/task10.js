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