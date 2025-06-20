const constants = require('../constants');
function checkSeason(season){
    const seasonNumberic = Number(season);
    if(seasonNumberic <= 0 || seasonNumberic > 12 ) return "Inavalid season. Expected a value between [1, 12]";
    return constants.seasons(season);
}