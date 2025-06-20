function truncateString(word, maxLen){
    if(!word || !maxLen) return 'Params cannot be empty. 2 params found 0'
    if(typeof word !== 'string') return 'input must be of type string'
    if(word.length > maxLen) return word.slice(0, maxLen -3)+ '...'
    if(word.length <= maxLen -3) return word.replace(word, '...');
}