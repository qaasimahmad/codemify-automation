function containsElement(randomList, searchElement){
    if(arguments.length < 2){
        return `Invalid Input! Expected 2 arguments. Found ${arguments.length}`;
    }

    if(!(Array.isArray(randomList))){
        return "Invalid input! Expected an array."
    }

    return randomList.includes(searchElement);
}