 function reverseString(string1) {
    let newString = "";
    for (i = 0; i < string1.length; i++ ) {
      newString += string1.charAt(string1.length-(i+1));
        //  newString.padStart(string1.length,string1.slice(i, i+1));
    }
    return newString;

};

// Do not edit below this line
//module.exports = reverseString;
