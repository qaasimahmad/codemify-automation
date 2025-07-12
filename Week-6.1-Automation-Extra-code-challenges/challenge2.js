/* eslint-disable no-unused-vars */
// Challenge 2: Find the most frequent element in a given array
// Write a function to find the most frequent element in the array. If there are multiple elements that appear a maximum number of times, print the first of them

function mostFrequent(arr, n){
  const freqObj = {};
  let maxNumberOfTimes = 0;
  let mostFrequentElement = arr[ 0 ];

  for (let i = 0; i < n; i++){
    let el = arr[ i ];
    if(freqObj[ el ] === undefined){
      freqObj[ el ] = 1;
    } else {
      freqObj[ el ]++;
    }

    if(freqObj[ el ] > maxNumberOfTimes){
      maxNumberOfTimes = freqObj[ el ];
      mostFrequentElement = el;
    }
  }

  return mostFrequentElement;
}

// Usage examples:
//let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];

// let n = arr.length;
// console.log(mostFrequent(arr, n));; // 40