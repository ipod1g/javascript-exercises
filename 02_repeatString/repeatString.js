const repeatString = (textTest, n) => {
    if (n < 0 ) return 'ERROR';

    let text = '';
    for(i=0; i<n; i++){
        text += textTest;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
