function checkEligibility(age){
    if(!age) return "Invalid input. Age must be passed";
    if(age <= 0 || !Number.isInteger(age)) return "invalid age passed, pls check and try again";
    if(age > 90) return "You sem too old to drive. Kindly quit! 😉"
    if(age < 16){
        return 'cannot drink, drive, vote'
    } else if(age >=16 && age <18){
        return 'can drive';
    } else if(age >= 18 && age < 21){
        return 'can vote and drive'
    } else if(age >=21){
        return 'can drink, drive and vote'
    }
}