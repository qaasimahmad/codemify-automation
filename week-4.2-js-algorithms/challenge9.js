// Challenge 9: Find the Intersection of Two Arrays
// Write a function that takes two arrays and returns an array that is the intersection of the two arrays.

// eslint-disable-next-line no-unused-vars
function findIntersection(randomList1, randomList2){
  if(!Array.isArray(randomList1) || !Array.isArray(randomList2)){
    return {
      success: false,
      message: "Invalid Input! list must be an array"
    }
  }

  const randomSet1 = new Set([ ...randomList1 ]);
  const randomSet2 = new Set([ ...randomList2 ]);
  const intersect = randomSet1.intersection(randomSet2);

  return [ ...intersect ];
}

// Usage examples:
//console.log(findIntersection([1, 2, 3], [3, 4, 5])); // [3]
//console.log(findIntersection(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
//console.log(findIntersection([10, 20, 30], [40, 50, 60])); // []