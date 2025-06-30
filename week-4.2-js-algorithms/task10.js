function mergeArrays(randomList1, randomList2){
    if((randomList1 === undefined || randomList1 === null) || (randomList2 === undefined || randomList2 === null)){
        return 'Expecting a list of items!';
    }

    if(!Array.isArray(randomList1) || !Array.isArray(randomList2)){
        return "Invalid Input! list must be an array"
    }
    /*solution 1

    const newList = [...randomList1, ...randomList2];
    return newList;

    - Challenge: Not ideal if array is large, it will keep the new array in memory
    */

    // Solution 2: Directly mutates the first array and does not hold a new array in memory

    randomList1.push(...randomList2);
    return randomList1;
}
