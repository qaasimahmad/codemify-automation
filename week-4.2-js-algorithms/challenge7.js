// Challenge 7: Check If All Elements Are Unique
// Write a function that checks if all elements in an array are unique.

function areAllElementsUnique(randomList){
    if(!Array.isArray(randomList)){
        return {
            success: false,
            message: "Invalid Input! list must be an array"
        }
    }

    const isUnique = new Set(randomList).size === randomList.length;
    
    return isUnique;
}

// Usage examples:
//console.log(areAllElementsUnique([1, 2, 3, 4, 5])); // true
//console.log(areAllElementsUnique(["a", "b", "c", "a"])); // false
//console.log(areAllElementsUnique([10, 20, 30, 40, 50])); // true