function reverseArray(randomList){
    if(!randomList){
        return "Param cannot be empty!";
    }

    if(!(Array.isArray(randomList))){
        return `Invalid input! Expected an array. Found ${typeof randomList}`
    }

    let finalList = [];

    for(let i = randomList.length -1; i >= 0; i-- ){
        finalList.push(randomList[i]);
    }
    return finalList;
}