import { validateWordList } from './utils';

// eslint-disable-next-line no-unused-vars
function findDollarStrings(list){
  if(arguments.length < 1) return 'Invalid input! One param needed. found none';

  const validatorResponse = validateWordList(list);

  if(!validatorResponse.success){
    return validatorResponse.message;
  }

  const regex = /\$/g;
  const found = list.filter((item)=> item.match(regex));

  return found;
}