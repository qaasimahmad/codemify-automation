const utils = {
  validateWordList: (wordList) => {

    if(!Array.isArray(wordList)){
      return {
        success: false,
        message: "Invalid Input! This function expects an array."
      };
    } else if(wordList.length === 0){
      return {
        success: false,
        message: "Empty array! Please provide at least one string."
      };
    } else if(!wordList.every(item => typeof item === 'string')){
      return {
        success: false,
        message: "Type Error! All items in the array must be strings."
      };
    }
    return {
      success: true,
      message: ""
    };
  },
  validateNumberList: (numbers)=>{
    if(!Array.isArray(numbers)){
      return {
        success: false,
        message: "Invalid Input! This function expects an array and must not be empty."
      };
    } else if(!numbers.every(item => typeof item === "number" && !isNaN(item))){
      return {
        success: false,
        message: "Type Error! All items in the array must be valid numbers."
      };
    }
    return {
      success: true,
      message: ""
    };
  }

}

module.exports = utils;