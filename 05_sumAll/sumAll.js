const sumAll = function(num1, num2) {
    //Error handle
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return 'ERROR';
 
    else {        
        const lowSelect = () => (num1 < num2) ? num1 : num2 ;
        const highSelect = () => (num1 > num2) ? num1 : num2 ;
        
        const numObject = {
            high: highSelect(num1, num2),
            low: lowSelect(num1, num2)
        }

        let sumNum = 0;
        
        for(i=numObject.low; i <= numObject.high; i++) {
            sumNum += i;
        }
        return sumNum;
    };
}
    
    // Do not edit below this line
    module.exports = sumAll;
    