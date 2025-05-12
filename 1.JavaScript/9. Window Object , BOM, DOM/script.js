// Window Object --- BOM & DOM //

// window object are 3 types as fllow:- //

// 1. DOM, 2. BOM , 3. JS core //


// 1. DOM - Document Object Model //

// This DOM control the HTML page.

// EX:-
document.body.style.backgroundColor = "aqua";


// It has three nodes :- 1. text nodes , 2. element nodes , 3. comment nodes.


// <HTML> this is a way. <head> and <body> is its child.

// first child , last child , child nodes.


// // first child//

// document.body.firstChild.style.backgroundColor = "green";
// document.body.childNodes[2].style.backgroundColor = "blue";

// // previous Element Sibling

// document.parentElementSibling.style.backgroundColor = "red";

// // next Element Sibling

// document.nextElementSibling.style.backgroundColor = "black";

// // first Element Child

// document.firstElementChild.style.backgroundColor = "pink";

// // last Element Child
// document.lastElementChild.style.backgroundColor = "pink";



// * Table DOM:-

// Create a table element
var table = document.createElement('table');
table.style.border = '2px solid black';
table.style.borderCollapse = 'collapse';

// Create the table header
var thead = document.createElement('thead');
var headerRow = document.createElement('tr');
var headers = ['Name', 'Age', 'Country' , 'State'];

headers.forEach(function(header) {
    var th = document.createElement('th');
    th.textContent = header;
    th.style.border = '1px solid black';
    th.style.padding = '8px';
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// Create the table body
var tbody = document.createElement('tbody');
var rows = [
    ['John Doe', 30, 'USA', "sdfdsf"],
    ['Jane Smith', 25, 'UK', 'dsffd'],
    ['Sam Johnson', 35, 'Canada', 'swqbhgr']
];

rows.forEach(function(rowData) {
    var row = document.createElement('tr');
    rowData.forEach(function(cellData) {
        var td = document.createElement('td');
        td.textContent = cellData;
        td.style.border = '1px solid black';
        td.style.padding = '8px';
        row.appendChild(td);
    });
    tbody.appendChild(row);
});
table.appendChild(tbody);

// // Append the table to the document
document.getElementById('table-container').appendChild(table);





// Searching the DOM //

// 1. getElemetById

// document.getElementById('table-container').style.backgroundColor = "green";

// 2. getElemetByClassName

var elements = document.getElementsByClassName('my-class');
        for (var i = 0; i < elements.length; i++) {
            console.log(elements[i].textContent);
        }
 

 
// 3. querySelector

let item = document.querySelector (".my-class");
console.log(item.textContent);




 

// 4. querySelectorAll
let item1 = document.querySelectorAll(".my-class");
item1.forEach(function(ele){

    console.log(ele.textContent);
    
})


 

// 5. getElemetsByTagName

let item2 = document.getElementsByTagName ("div");

for (var i = 0; i < item2.length; i++) {
    console.log(item2[i].textContent);
}




// 6. getElemetsByName

let name = document.getElementsByName("raja");

name.forEach(function(naame){
    console.log(naame.value);
    
})



// Matches , Closest , Contain mathods


let ele = document.getElementById("table-container");

if (ele.matches('#table-container')){
    console.log("Elemets mathched");
    
} // Matches//


var child = document.querySelector('.my-class');
var closestAncestor = child.closest('.my-class');
console.log(closestAncestor);  // Closest//









// Events & Other DOM

console.dir ("sdasdsad")
console.log ("sdasdsad")









