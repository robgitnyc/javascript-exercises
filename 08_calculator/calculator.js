function add(num1, num2) {
  return num1 + num2;
}

function subtract(a,b) {
  return a - b;
}

function sum(array) {
//con forEach:
  let suma = 0;
  array.forEach(function (myArray) {
    suma += myArray;
  })
  return suma;
 
 /*

 // con **for**:

  suma = 0;
  for (i = 0; i < array.length; i++) { 
    suma += array[i];
  }
  return suma;       */
}

function multiply(array2) {
  let product = 1;
  array2.forEach(function (elem) {
    product *= elem;
  })
  return product; 
}

function power(a,b) {
  return a**b;
}

function factorial(a) {
  let product2 = 1;
  for (i = a; i > 0; i--) {
    product2 *= i;
  }
  return product2;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
