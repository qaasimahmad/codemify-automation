/* eslint-disable no-unused-vars */
// Challenge 4: Find duplicates in two arrays
// Write a function that takes two arrays as arguments and returns an array of values that are repeated more than once across the two input arrays

function findDuplicates(randomList1, randomList2){
  if(!Array.isArray(randomList1) || !Array.isArray(randomList2)){
    return {
      success: false,
      message: "Invalid Input! list must be an array"
    }
  }
  const combined  = randomList1.concat(randomList2);
  const freqMap = new Map();
  const duplicates = new Set();

  for (const val of combined){
    const count = (freqMap.get(val) || 0) + 1;

    freqMap.set(val, count);

    if(count === 2){
      duplicates.add(val)
    }
  }
  return Array.from(duplicates).sort();
}

// Usage examples:
// const array1 = [1, 2, 3, 4, 5, 5]; const array2 = [4, 5, 6, 7, 7, 8];
// console.log(findDuplicates(array1, array2)); //  [4, 5, 7]

