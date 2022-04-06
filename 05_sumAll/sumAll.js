 function sumAll(num1, num2) {
    if (num1 < 0 || num2 <0) {
        return "ERROR";
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number' ) {
        return "ERROR"; 
    }

     let sum = 0;
     let biggerNum = 0;
     let smallerNum = 0;
    if (num1 > num2) {
        biggerNum = num1;
        smallerNum = num2;
    } else {
        biggerNum = num2;
        smallerNum = num1
    }

     for (i = smallerNum; i <= biggerNum ; i++) {
         sum += i;
     }
     return sum;
};

// Do not edit below this line
module.exports = sumAll;
