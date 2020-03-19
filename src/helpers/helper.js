const mapRomanNumericals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  
   /**
   * toRoman - method to convert from number to roman numericals.
   * @param {number} num - input value.
   * @returns {string} - roman numericals
   */
  const toRoman = num => {
    if (num > 3999) {
      return " Values must be in the range [1 .. 3999].";
    }
    const lookup = mapRomanNumericals;
    let romanized = "";
    for (let i in lookup) {
      while (num >= lookup[i]) {
        romanized += i;
        num -= lookup[i];
      }
    }
  
    return romanized || "invalid Input";
  };
  
   /**
   * fromRoman - method to convert from roman numericals to number.
   * @param {string} roman - input value.
   * @returns {number} - number
   */
  const fromRoman = roman => {
    const romanInput = roman.toUpperCase();
    const lookup = mapRomanNumericals;
    let number = 0;
    let i = romanInput.length;
    while (i--) {
      if (lookup[romanInput[i]] < lookup[romanInput[i + 1]])
        number -= lookup[romanInput[i]];
      else number += lookup[romanInput[i]];
    }
    return number || "invalid Input";
  };
  
  export const RomanNumerals = {
    toRoman,
    fromRoman
  };
  