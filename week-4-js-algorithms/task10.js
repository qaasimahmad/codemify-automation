// eslint-disable-next-line no-unused-vars
function palindrome(word){
  if(arguments.length < 1) return "expected a param. Found none";

  let reversed = "";

  for (let i = word.length -1; i >= 0; i--){
    reversed += word[ i ];
  }

  return reversed === word;
}