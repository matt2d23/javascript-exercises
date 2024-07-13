const palindromes = function (str) {
    const validChars = "abcdefghijklmnopqrstuvwxyz123456789";

    const cleanString = str.toLowerCase()
            .split('')
            .filter((item) => validChars.includes(item))
            .join('');

    const reversedString = cleanString.split('').reverse().join('');

    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
