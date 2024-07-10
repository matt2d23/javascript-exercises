const reverseString = function(input) {
    let result = '';
    for (let i = 1; i <= input.length; i++) {
        result += input.substr(-i, 1);
    }
    return result;
    
};

// Do not edit below this line
module.exports = reverseString;
