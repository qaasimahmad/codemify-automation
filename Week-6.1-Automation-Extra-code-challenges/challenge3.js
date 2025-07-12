
// Challenge 3: Count positive and negative numbers in an array
// Write a function to count positive and negative numbers in an array

function countPositivesAndNegatives(numberList, type){
  const typeEnum = [ 'positive', 'negative' ];
  if(!typeEnum.includes(String(type))){
    return {
      success: false,
      message: `type can only be ${typeEnum}`
    }
  }
  if(!Array.isArray(numberList)){
    return {
      success: false,
      message: "Invalid Input! This function expects an array and must not be empty."
    };
  }

  if(!numberList.every(item => typeof item === "number" && !isNaN(item))){
    return {
      success: false,
      message: "Type Error! All items in the array must be valid numbers."
    };
  }

  const positives = numberList.filter((number)=> number > 0);
  const negatives = numberList.filter((number)=> number < 0);

  return type === typeEnum[ 0 ] ? positives.length : negatives.length;

}

let arr = [ 10,20, -1,22,99,20, -9 ];

console.log(`The negative numbers in an array is ${JSON.stringify(countPositivesAndNegatives(arr, 'negative'))}`) //"The negative numbers in an array is 2"
console.log(`The positive numbers in an array is ${JSON.stringify(countPositivesAndNegatives(arr, 'positive'))}`) // "The positive numbers in an array is 5"