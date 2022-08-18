const fibonacci = function(input) {

    let storage = 0;
    let storage2 = 1;

    for(i=1; i<=input; i++){
        next = storage + storage2;
        storage = storage2;
        storage2 = next;
    }

    return storage;
};

// Do not edit below this line
module.exports = fibonacci;
