// Challenge 5: Remove Specific Elements
// Write a function that takes an array and a value, and returns a new array with all occurrences of that value removed.

function removeSpecificElement(randomList, searchParam){
    if(arguments.length < 2){
        return {
            success: false,
            message: `Invalid Input! Expected 2 arguments. Found ${arguments.length}`
        }
    }

    if(!Array.isArray(randomList)){
        return {
            success: false,
            message: "Invalid Input! list must be an array"
        }
    }

    if(Array.isArray(searchParam)){
        return {
            success: false,
            message: "Invalid input! search params cannot be a list"
        }
    }
    
    const filteredList = randomList.filter((element)=> element !== searchParam);
    return filteredList;
}

// Usage examples:
// console.log(removeSpecificElement([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 4]
// console.log(removeSpecificElement(["a", "b", "c", "b"], "b")); // ["a", "c"]
// console.log(removeSpecificElement([5, 6, 7], 8)); // [5, 6, 7]