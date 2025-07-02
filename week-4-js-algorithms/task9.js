function findLongestWord(word){
    if(arguments.length < 1) return "invalid input! expected a param. found none";

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