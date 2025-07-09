import { validateNumberList } from './utils';

// eslint-disable-next-line no-unused-vars
function findEvenNumbers(numbers){
  const validatorResponse = validateNumberList(numbers);

  if(!validatorResponse.success){
    return validatorResponse.message;
  }

  const evenNumbers = numbers.filter((element)=>{
    return element % 2 == 0;
  });

  return evenNumbers;
}