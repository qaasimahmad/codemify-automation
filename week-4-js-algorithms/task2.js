import { validateNumberList } from './utils';

// eslint-disable-next-line no-unused-vars
function findLargestNumber(numbers){
  if(arguments.length) return 'Invalid input! One param needed. found none';

  const validatorResponse = validateNumberList(numbers);

  if(!validatorResponse.success){
    return validatorResponse.message;
  }

  const largestNumber = numbers.reduce((largestSoFar, current)=> current > largestSoFar ? current : largestSoFar);

  return largestNumber;
}