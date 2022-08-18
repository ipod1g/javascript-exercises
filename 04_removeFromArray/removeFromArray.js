const removeFromArray = function(randArray, ...num) {
    for (const n of num) {
        let findNum = randArray.indexOf(n);
        if (findNum > -1){
            let removedArray = randArray.splice(findNum,1);
        }
    }
    return randArray;
};

// Do not edit below this line
module.exports = removeFromArray;
