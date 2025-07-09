import { validateWordList } from './utils';

// eslint-disable-next-line no-unused-vars
function concatenateElements(wordList){
  const validatorResponse = validateWordList(wordList);

  if(!validatorResponse.success){
    return validatorResponse.message;
  }

  const joinedWords = wordList.reduce((wordSofar, current)=> {
    return wordSofar+current;
  });

  return joinedWords;
}