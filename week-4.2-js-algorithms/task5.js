function removeSpecificElement(randomList, searchParam){

    if(randomList === undefined || randomList === null){
        return `Expecting a list of items! Found ${randomList}`;
    }

    if(searchParam === undefined || searchParam === null){
        return `Invalid Input! pass a valid search param, found ${searchParam}`;
    }

    if(!Array.isArray(randomList)){
        return "Invalid Input! list must be an array"
    }

    if(Array.isArray(searchParam)){
        return "Invalid input! search params cannot be a list"
    }

    
    // Solution 1
    // const result = randomList.filter((element)=> element !== searchParam);
    // return result

    // Solution 2
    let filteredList = [];

    for(let item of randomList){
        if(item !== searchParam){
            filteredList.push(item);
        }
    }
    return filteredList;
}