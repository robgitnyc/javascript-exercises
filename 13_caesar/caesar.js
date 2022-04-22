function caesar(string, shiftBy) {

    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    let upperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
    let indChars = Array.from(string); //array que contiene caracteres del string
    let finalString = "";
    
    for (i =0; i < indChars.length; i++) {
        
        let origLetter =   indChars[i]; // (string) un caracter suelto del string en forma de elemnto de array
        let alphaIndex = alphabet.indexOf(origLetter);// (numero) indice de de la letra en el string alphabet
        let upAlphaIndex = upperAlpha.indexOf(origLetter); // (numero)
     
        let auxLo = alphaIndex+shiftBy;
        let auxHi = upAlphaIndex+shiftBy;

        if (auxLo < 0) {
            auxLo = 26 + auxLo;
            if (auxLo < 0) {
                auxLo = 26 + auxLo;
                
            }
        }
        if (auxHi < 0) {
            auxHi = 26 + auxHi;
            if (auxHi < 0) {
                auxHi = 26 + auxHi;
            }
        }

        let newLetter = alphabet[(auxLo)%26]; //string
        let newUpLetter = upperAlpha[(auxHi)%26]; //string


        
        
        if (upperAlpha.includes(origLetter) ==false && alphabet.includes(origLetter) == false) {
            finalString += origLetter;
        } else
            
        if (origLetter != origLetter.toUpperCase()) {
            
               finalString += newLetter;
        } else if (origLetter == origLetter.toUpperCase()) {
                finalString += newUpLetter;
        }; 
 
    };
    
    return finalString;
};

console.log("abc ABC".charCodeAt(3));
// Do not edit below this line
module.exports = caesar;
