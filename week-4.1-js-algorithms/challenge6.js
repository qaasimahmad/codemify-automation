import { validateNumberList } from './utils';

// eslint-disable-next-line no-unused-vars
function calculateAverage(randomList){
  const validatorResponse = validateNumberList(randomList);

  if(!validatorResponse.success){
    return validatorResponse.message;
  }

  const sum = randomList.reduce((numberSoFar, current)=>{
    return (current + numberSoFar);
  });

  return sum/randomList.length;
}