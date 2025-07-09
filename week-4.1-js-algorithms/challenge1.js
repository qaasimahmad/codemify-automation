const utils = require('./utils');

function squareNumbers(numbers){
    const validatorResponse = utils.validateNumberList(numbers);

    if(!validatorResponse.success){
        return validatorResponse.message;
    }

    const squaredNumbers = numbers.map((element)=>{
        return Math.pow(element, 2);
    });

    return squaredNumbers;
}const utils = require('./utils');

function squareNumbers(numbers){
  const validatorResponse = utils.validateNumberList(numbers);

  if(!validatorResponse.success){
    return validatorResponse.message;
  }

  const squaredNumbers = numbers.map((element)=>{
    return Math.pow(element, 2);
  });

  return squaredNumbers;
}