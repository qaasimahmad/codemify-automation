const utils = require('./utils');

function findDollarStrings(list){
  if(arguments.length < 1) return 'Invalid input! One param needed. found none';

  const validatorResponse = utils.validateWordList(list);

  if(!validatorResponse.success){
    return validatorResponse.message;
  }

  const regex = /\$/g;
  const found = list.filter((item)=> item.match(regex));

  return found;
}