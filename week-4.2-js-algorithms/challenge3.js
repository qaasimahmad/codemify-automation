// Challenge 3: Flatten a Two-Dimensional Array
// Write a function that takes a two-dimensional array and returns a flattened array.

// eslint-disable-next-line no-unused-vars
function flattenArray(randomList){
  if(!Array.isArray(randomList)){
    return {
      success: false,
      message: "Invalid Input! list must be an array"
    }
  }

  let flattenedArray = [];

  for (let item of randomList){
    if(Array.isArray(item)){
      const flatItem = flattenArray(item);

      flattenedArray.push(...flatItem);
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
}

// Usage examples:
// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
// console.log(flattenArray([["a", "b"], ["c", "d"]])); // ["a", "b", "c", "d"]
// console.log(flattenArray([[1], [2], [3]])); // [1, 2, 3]