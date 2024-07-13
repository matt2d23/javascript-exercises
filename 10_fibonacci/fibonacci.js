const fibonacci = function(num) {
    let arr = [0,1];
    let i;
    
    for (i = 2; i <= num; i++) {
        arr[i] = arr[i-2] + arr[i-1];
    }

    return num < 0 ? 'OOPS' : 
            num == 0 ? 0 : 
            num == 1 ? 1 : arr[arr.length-1];    
};

// Do not edit below this line
module.exports = fibonacci;
