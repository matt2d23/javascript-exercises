const convertToCelsius = function(initial) {
  let math = ((initial-32) * 5/9);
  if (math % 1 === 0) {
    return math;
  } else {
    return parseFloat(math.toFixed(1));
  }
};

const convertToFahrenheit = function(initial) {
  let math = ((9/5)* initial) + 32;
  if (math % 1 === 0){
    return math;
  } else {
    return parseFloat(math.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
