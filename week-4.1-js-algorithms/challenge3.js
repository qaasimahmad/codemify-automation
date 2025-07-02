function reverseArray(randomList){
    if(!(Array.isArray(randomList))){
        return "Invalid input! Expected an array."
    }

    const reversedList = randomList.slice().reverse();
    return reversedList;
}