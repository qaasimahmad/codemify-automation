const constants = require('./constants');
function checkSeason(season){
    if(typeof season !== 'number' || isNaN(season)) return 'Type Error! Season must be a number';
    
    if(season <= 0 || season > 12 ) return "Invalid season. Expected a value between [1, 12]";
    return constants.seasons(season);
}