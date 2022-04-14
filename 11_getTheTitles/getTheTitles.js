function getTheTitles(array1) {
    let array2 = [];
    array1.forEach(function(elem) {
        array2.push(elem.title)
    })
     return array2;
 //   console.log(array1[1].title); 
}

const books = [
    {
      title: 'Book of jungle',
      author: 'Name'
    },
    {
      title: 'Quijote',
      author: 'Name2'
    }
  ]
console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
