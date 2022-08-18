const palindromes = function (strInput) {
    const removeSpecial = strInput.replace(/[^a-zA-Z0-9]/g, '');
    const lowerCase = removeSpecial.toLowerCase();

    charArray = Array.from(lowerCase);
    
    reverseArray = charArray.reverse();
    
    let final = reverseArray.join("");
    
    if (lowerCase === final) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
