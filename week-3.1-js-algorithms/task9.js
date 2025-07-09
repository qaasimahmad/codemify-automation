import { getMeals } from './constants';

// eslint-disable-next-line no-unused-vars
function suggestMeal(time, diet){
  const timeOfDay = time.toLowerCase();
  const dietType = diet.toLowerCase();

  const validTimes = [ "morning", "afternoon", "evening" ];
  const validDiets = [ "vegan", "vegetarian", "omnivore" ];

  if(!validTimes.includes(timeOfDay)){
    return `Invalid time of day. Please choose ${validTimes}`;
  }
  if(!validDiets.includes(dietType)){
    return `Invalid diet type. Please choose ${validDiets}`;
  }

  return getMeals(timeOfDay, dietType);
}