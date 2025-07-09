const constants = {
  seasons: (season)=>{
    const seasons = {
      1:  'Winter',
      2:  'Winter',
      12: 'Winter',
      3:  "Spring",
      4:  "Spring",
      5:  "Spring",
      6:  "Summer",
      7:  "Summer",
      8:  "Summer",
      9:  "Autumn",
      10: "Autumn",
      11: "Autumn"
    }

    return seasons[ season ];
  },
  trafficGuide: (color)=>{
    const guide = {
      'red':    'Stop',
      'yellow': 'Caution',
      'green':  'Go'
    }

    return guide[ color ];
  },
  getMeals: (time, diet)=>{
    const meals = {
      morning: {
        vegan:      "Fruit smoothie with oats",
        vegetarian: "Vegetarian scrambled eggs with toast",
        omnivore:   "Bacon and eggs with toast"
      },
      afternoon: {
        vegan:      "Vegan burrito",
        vegetarian: "Vegetarian pizza",
        omnivore:   "Chicken sandwich"
      },
      evening: {
        vegan:      "Vegan lentil stew",
        vegetarian: "Vegetable lasagna with garlic bread",
        omnivore:   "Salmon with quinoa and steamed broccoli"
      }
    };

    return meals[ time ][ diet ];
  }
}

export default constants;