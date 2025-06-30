function findMostFrequentElement(randomList){
    if(randomList === undefined || randomList === null){
        return `Expecting a list of items! Found ${randomList}`;
    }

    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

    //Solution before asking Ai
    /* 
    let found = {
        key: "",
        value: 0
    };
    let maxCount = 0;
    let mostFrequent = randomList[0];

    for(const item of randomList){
        found['key'] = item;
        found['value'] = found['value'] + 1;

        if(found['value'] > maxCount){
            maxCount = found['value'];
            mostFrequent = found['key'];
        }
    }

    return mostFrequent;

    Issues Found
    - You are using a single object (found) to track counts, so it does not store separate counts per item.
    - You’re globally incrementing found.value, not per unique element.
    - There is no object or map to count individual occurrences.
    */
    
//Modified solution after AI a solution
    const found = {};
    let maxCount = 0;
    let mostFrequent = randomList[0];

    for(const item of randomList){
        found[item] = (found[item] || 0) + 1;

        if (found[item] > maxCount) {
            maxCount = found[item];
            mostFrequent = item;
        }
    }

    return mostFrequent;
    
}
