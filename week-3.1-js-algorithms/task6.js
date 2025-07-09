function checkTemp(value){
    if(!value || isNaN(value)) return 'invalid Input';

    if(value >= 100) return 'Warning! This is boiling Point';

    if(value < 32){
        return 'Freezing';
    } else if(value >= 32 && value <= 50){
        return 'Cold';
    } else if(value >= 51 && value <= 70){
        return 'Mild';
    } else if(value >= 71 && value <= 90){
        return 'Warm';
    } else {
        return 'Hot';
    }
   
}