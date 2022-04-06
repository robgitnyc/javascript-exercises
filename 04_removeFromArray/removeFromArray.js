/* Codigo que funciona para eliminar solo un item: 
function removeFromArray(array1, itemToRemove) {
      let theArray = arguments[0] 
      let index= theArray.indexOf(itemToRemove);
      let newArray = theArray.splice(index, 1);
      return theArray;
};
*/
function removeFromArray() {
      let array1 = arguments[0] 
      let rootArray = Array.from(arguments);
      for (i = rootArray.length -1; i > 0 ; i--) {
            if  (array1.includes(rootArray[i]) == false) {
                  array1.push(array1[-1])
            };

            array1.splice(array1.indexOf(rootArray[i]), 1);
  
      } 
      return array1; 
      

} 



// Do not edit below this line
module.exports = removeFromArray; 

/* let theArray = arguments[0] 
      for (i = 0; i < arguments.length; i++) {
            
      }
      */