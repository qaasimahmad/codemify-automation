// eslint-disable-next-line no-unused-vars
function truncateString(word, maxLen){
  if(!word || !maxLen) return 'Params cannot be empty. Expected 2 params but found 0';
  if(typeof word !== 'string') return 'input must be of type string';
  if(word.length > maxLen){
    return word.slice(0, maxLen -3)+ '...'
  } else {
    return word;
  }

}