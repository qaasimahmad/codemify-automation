const utils = require("./utils");

function findIntersection(randomList1, randomList2){
    if((randomList1 === undefined || randomList1 === null) || (randomList2 === undefined || randomList2 === null)){
        return 'Expecting a list of items!';
    }

    if(!Array.isArray(randomList1) || !Array.isArray(randomList2)){
        return "Invalid Input! list must be an array"
    }

    const intersects = utils.findListsIntersect(randomList1, randomList2);

    return intersects;
}