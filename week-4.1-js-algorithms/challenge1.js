import { validateNumberList } from './utils';

// eslint-disable-next-line no-unused-vars
function squareNumbers(numbers){
  const validatorResponse = validateNumberList(numbers);

  if(!validatorResponse.success){
    return validatorResponse.message;
  }

  const squaredNumbers = numbers.map((element)=>{
    return Math.pow(element, 2);
  });

  return squaredNumbers;
}