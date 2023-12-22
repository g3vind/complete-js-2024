// UPDATING AND CHANGING CONTENT

// INNER TEXT
// ignore spaces, retrieve and set content in plain txt
let heading = document.querySelector('.one')
heading.innerText = "Something Something"
console.log(heading.innerText)

// INNER HTML
// does not ignore spaces
// retrive and set content in html format
console.log(heading.innerHTML)