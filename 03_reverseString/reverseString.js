const reverseString = function(word) {
    const letterArray = word.split("");
    let reverseWord = '';

    const reverseLetter = (letterArray) => {
        for(i=letterArray.length; i>0 ;i--) {
            reverseWord += letterArray[i-1];
        }
        return reverseWord;
    }
    reverseLetter(letterArray);

    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
