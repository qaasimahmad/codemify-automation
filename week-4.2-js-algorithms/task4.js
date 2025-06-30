function findCommonElements(randomList1, randomList2){
    if((randomList1 === undefined || randomList1 === null) || (randomList2 === undefined || randomList2 === null)){
        return 'Expecting a list of items!';
    }

    if(!Array.isArray(randomList1) || !Array.isArray(randomList2)){
        return "Invalid Input! list must be an array"
    }

    let intersectList = [];

    // Solution 1
    for(let i = 0; i < randomList1.length; i++){
        for(let j = 0; j < randomList2.length; j++){
            if(randomList1[i] === randomList2[j]){
                intersectList.push(randomList1[i]);
            }
        }
    }

    return intersectList;


    /*Solution 2
    const randomSet1 = new Set([...randomList1]);
    const randomSet2 = new Set([...randomList2]);
    const intersect = randomSet1.intersection(randomSet2);
    return [...intersect]; 
    */
    
}
console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"]));