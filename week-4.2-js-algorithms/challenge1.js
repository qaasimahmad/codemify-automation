import { validateNumberList } from './utils';

// Challenge 1: Find the Second Largest Number
// Write a function to find the second largest number in the array.

// eslint-disable-next-line no-unused-vars
function findSecondLargestNumber(numbers){
  if(numbers.length === 0){
    return {
      success: false,
      message: "Empty array! Please provide at least one number."
    }
  }

  const validatorResponse = validateNumberList(numbers);

  if(!validatorResponse.success){
    return validatorResponse;
  }

  const noDuplicateNumbers = [ ...new Set(numbers) ];

  if(noDuplicateNumbers.length < 2){
    return {
      success: false,
      message: "Not enough unique numbers to determine the second largest."
    };
  }

  noDuplicateNumbers.sort((a, b) => b - a);

  return noDuplicateNumbers[ 1 ];
}

// Usage examples:
// console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); // 4
// console.log(findSecondLargestNumber([10, 20, 30, 40, 50])); // 40
// console.log(findSecondLargestNumber([-1, -2, -3, -4, -5])); // -2