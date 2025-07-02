// Challenge 4: Find Common Elements Between Two Arrays
// Write a function that takes two arrays and returns an array of elements that are common to both.

function findCommonElements(randomList1, randomList2){
    if(arguments.length < 2){
        return {
            success: false,
            message: `Invalid Input! Expected 2 arguments. Found ${arguments.length}`
        }
    }

    if(!Array.isArray(randomList1) || !Array.isArray(randomList2)){
        return {
            success: false,
            message: "Invalid Input! list must be an array"
        }
    }

    const randomSet1 = new Set([...randomList1]);
    const randomSet2 = new Set([...randomList2]);
    const intersect = randomSet1.intersection(randomSet2);
    return [...intersect]; 
}

// Usage examples:
//console.log(findCommonElements([1, 2, 3, 3], [3, 4, 5])); // [3]
//console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]
//console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
//console.log(findCommonElements([10, 20, 30], [40, 50, 60])); // []