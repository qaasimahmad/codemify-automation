function isLeapYear(year){
    const yearNumber = !Number.isInteger(year) ? +year : year;
    if(yearNumber % 4 === 0 && yearNumber % 100 !== 0){
        return 'Leap Year';
    } else if(yearNumber % 400 === 0) {
        return 'Leap Year';
    } else {
        return 'Not a Leap Year'
    }
}