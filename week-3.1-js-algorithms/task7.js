function fizzBuzzSimplified(number){
    if(!number) return 'Missing Param. Expected 1 param. found none';
    if(typeof number !== 'number' || isNaN(number)) return 'Invalid type passed';
    let result;
    
    switch(true){
        case (number % 3 === 0 && number % 5 === 0):
            result = 'FizzBuzz';
            break;
        case number%3 === 0:
            result = 'Fizz';
            break;
        case number%5 === 0:
            result = 'Buzz';
            break;
        default:
            result = number;
    }
    return result;
}