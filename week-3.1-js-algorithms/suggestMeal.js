const constants = require('../constants');
function suggestMeal(time, diet) {
    const timeOfDay = time.toLowerCase();
    const dietType = diet.toLowerCase();
  
    const validTimes = ["morning", "afternoon", "evening"];
    const validDiets = ["vegan", "vegetarian", "omnivore"];
  
    if (!validTimes.includes(timeOfDay)) {
      return `Invalid time of day. Please choose ${validTimes}`;
    }
    if (!validDiets.includes(dietType)) {
      return `Invalid diet type. Please choose ${validDiets}`;
    }
  
    return constants.getMeals(timeOfDay, dietType);
  }

  console.log(suggestMeal("morning", "vegan"));