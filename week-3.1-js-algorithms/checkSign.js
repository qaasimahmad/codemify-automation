const constants = require("../constants");
function checkSign(color){
    if(!color || typeof color !== 'string') return 'Invalid input! Chek that a color is passed and it is a String';

    if(!trafficColors.includes(color)) return `Invalid color detected. Traffic colors are ${trafficColors}`;

    return constants.trafficGuide(color);
}

const trafficColors = ['red', 'yellow', 'green'];