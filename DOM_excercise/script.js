const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const test = document.createElement ('p');
test.classList.add('red');
test.textContent = "Hey, I'm red!";

container.appendChild(test);

const blue = document.createElement("h3");
blue.textContent = "I'm a blue h3";
document.querySelector('#container').appendChild(blue);

const div2 = document.createElement("div");
    div2.style.backgroundColor = "pink";
    div2.style.borderStyle= "solid";
    div2.style.borderWidth= "thin";
    div2.style.borderColor= "black";
const h1b = document.createElement("h1");
    h1b.textContent = "I am in a div";
const p2 = document.createElement("p");
    p2.textContent = "ME TOO!";

container.appendChild(div2); 
div2.appendChild(h1b);
div2.appendChild(p2);

const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

/*
btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
*/
//btn.addEventListener('click', () => alert("Hello World"));
/*
btn.addEventListener('click', function (e) {
    console.log(e);
  }); 
*/
/////
/*
const container2 = document.querySelector("#container");

const content2 = document.createElement('div');
content2.classList.add('content2');
content2.textContent = 'This is a drill';
container2.appendChild(content2); 

*/