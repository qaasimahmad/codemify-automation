function findMostFrequentElement(randomList){
    if(randomList === undefined || randomList === null){
        return `Expecting a list of items! Found ${randomList}`;
    }

    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

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