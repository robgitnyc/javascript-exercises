function palindromes(phrase) {
    let loCasePhrase = phrase.toLowerCase();
    let unspacedPhrase = loCasePhrase.replace(/\W|_/g, '');
    let reversed = "";
    for (i = 0; i < unspacedPhrase.length; i++ ) {
        reversed += unspacedPhrase.charAt(unspacedPhrase.length-(i+1));
}
    if (unspacedPhrase == reversed) {
        return true;
    } else {
        return false;
    }
}
// Do not edit below this line
module.exports = palindromes;
