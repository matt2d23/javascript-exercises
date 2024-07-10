const sumAll = function(min, max) {
    let final = 0;

    let sortArgs = Array.from(arguments).sort((a,b) => a-b);
    
    min = sortArgs[0];
    max = sortArgs[1];

    if ((min < 0 || max < 0) || (typeof(min) !== 'number' || typeof(max) !== 'number')) {
        return 'ERROR';
    } else {
        for (let i = min; i <= max; i++) {
            final += i
        }
        return final;
    };
    
};

// Do not edit below this line
module.exports = sumAll;
