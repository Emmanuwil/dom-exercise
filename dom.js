//*---------- Exercise #1: SELECTING MANIPULATION ELEMENTS ----------*/

// Select Node #1 and change the text to: "I used the getElementById('node') method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node') method to access this";
// Select Node #2 and change the text to 



document.getElementsByClassName("node2")[0].innerText = 
'I used the the get ElementByTagName("node2") to access this';

const h3Nodes = document.getElementsByTagName("h3");
for (let node of h3Nodes) {
    node.innerText = 
    'I used the getElementByTagName("h3" method to access all of these';
}


//Exercise 2

 const p = document.createElement(p);
 p.innerText = "I am a p Elelment"

//
 const parent = document.getElementById("parent");
 parent.appendChild = (p);

const small = document.createElement(small);
small.innerText = "I am small"

parent.insertBefore(small, p);


// Exercise 3 Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS

const newP = document.createElement("p");
newP.innerText = "New Child Node";