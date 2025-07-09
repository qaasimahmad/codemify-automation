const utils = require('./utils');

function convertNumbersToStrings(numbers){
  if(arguments.length < 1) return 'Invalid input! One param needed. found none';

  if(numbers.length === 0){
    return {
      success: false,
      message: "Empty array! Please provide at least one number."
    };
  }

  const validatorResponse = utils.validateNumberList(numbers);

  if(!validatorResponse.success){
    return validatorResponse.message;
  }

  const stringifiedNumbers = numbers.map((item)=>{
    return item.toString();
  });

  return stringifiedNumbers;
}