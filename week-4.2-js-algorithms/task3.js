function flattenArray(randomList){
    if(randomList === undefined || randomList === null){
        return `Expecting a list of items! Found ${randomList}`;
    }

    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

    /* First Approach 

    const flattenedArray = randomList.reduce((arraySoFar, current)=>{
         if(!Array.isArray(current)){
             current = [current];
         }

         const mergedSet = new Set([...arraySoFar, ...current]);
         return [...mergedSet];
     }, []);

    return flattenedArray;

    Challenge: Only works fine for one level deep array, not nested
    */


    /* Improvement on the First Approach 
    
    const flattenedArray = randomList.reduce((arraySoFar, current)=>{
        if(Array.isArray(current)){
        acc.push(...flattenArray(current))
        } else{
         acc.push(current)
        }
        return acc;
    }, [[]])
    */


    let flattenedArray = [];

    for(let item of randomList){
        if(Array.isArray(item)){
            const flatItem = flattenArray(item);
            flattenedArray.push(...flatItem);
        } else{
            flattenedArray.push(item);
        }
    }

    return flattenedArray;
}