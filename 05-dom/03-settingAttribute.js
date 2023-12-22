let coderLink = document.querySelector('a')

// getting the value of "href" attribute
let attr = coderLink.getAttribute('href')
console.log(attr)   // http://youtube.com/@coderdost

// setting the value of "href"
coderLink.setAttribute('href','http://google.com')
console.log(coderLink.getAttribute('href'))
coderLink.innerText = "New Inner Text"



// CHANGING STYLES OF ELEMENTS
let heading = document.querySelector("h1")
heading.style.color = "red"
heading.style.backgroundColor = "black"

let para = document.querySelector("p")
para.style.color = "blue"
para.style.backgroundColor = "yellow"