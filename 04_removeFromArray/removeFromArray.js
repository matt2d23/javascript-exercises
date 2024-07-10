const removeFromArray = function(arr, ...toRemove) {

let result = [];

arr.forEach((item) => {
    if (!toRemove.includes(item)) {
        result.push(item);
    }   
});

return result;
};


// Do not edit below this line
module.exports = removeFromArray;
