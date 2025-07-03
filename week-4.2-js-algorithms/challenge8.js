// Challenge 8: Find the Most Frequent Element
// Write a function that finds the most frequent element in an array.

function findMostFrequentElement(randomList){
  if(!Array.isArray(randomList)){
    return {
      success: false,
      message: "Invalid Input! list must be an array"
    }
  }

  const found = {};
  let maxCount = 0;
  let mostFrequent = randomList[ 0 ];

  for (const item of randomList){
    found[ item ] = (found[ item ] || 0) + 1;

    if(found[ item ] > maxCount){
      maxCount = found[ item ];
      mostFrequent = item;
    }
  }

  return mostFrequent;
}

// Usage examples:
// console.log(findMostFrequentElement([1, 2, 3, 2, 4, 2])); // 2
// console.log(findMostFrequentElement(["a", "b", "c", "b", "b"])); // "b"
// console.log(findMostFrequentElement([5, 5, 5, 6, 6, 7])); // 5