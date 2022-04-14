 function findTheOldest(arr) {
  
    let newArr = [];
    let thisYear =  new Date().getFullYear();

    arr.forEach (function (item) {
        if (item.yearOfDeath == undefined) {
            item.yearOfDeath = thisYear;
        };  

        let age1 = item.yearOfDeath - item.yearOfBirth;
        newArr.push(age1);

        item.age = age1;
          
  

        console.log(item);

    });
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      }
     let sorted = newArr.sort(compareNumeric);
     let oldestAge = sorted.slice(-1);
     

     let see = arr.find(item => item.age == oldestAge);

     
     return see; 

        
    
        


};

//debug:

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
        name: "paulee",
        yearOfBirth: 1962,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },]



 //   console.table(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
