function factorial(number){

    number = Number(number);


    if (isNaN(number)) {
        return "Invalid input; input must be a number";
    }

    if(number < 0){
        return "Invalid input; unput muyst be more than 0"
    }

    if(number === 0 || number === 1){
        return 1;
    }

    return number * factorial(number - 1);
}