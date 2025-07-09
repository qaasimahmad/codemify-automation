function containsElement(randomList, searchElement){
    if(randomList === undefined || randomList === null){
        return `Expecting a list of items! Found ${randomList}`;
    }

    if(!searchElement){
        return "Misisng Param! A search Element must be passed";
    }

    if(!(Array.isArray(randomList))){
        return `Invalid input! Expected an array. Found ${typeof randomList}`
    }

    return randomList.includes(searchElement);
}