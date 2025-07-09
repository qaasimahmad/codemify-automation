import { validateNumberList } from './utils';

// eslint-disable-next-line no-unused-vars
function sumNumbers(numbers){
  if(arguments.length < 1) return 'Invalid input! One param needed. found none';

  const validatorResponse = validateNumberList(numbers);

  if(!validatorResponse.success){
    return validatorResponse.message;
  }

  const sum = numbers.reduce((numberSofar, current)=>current + numberSofar, 0);

  return sum;
}