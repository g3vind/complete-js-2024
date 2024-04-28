// MAKING HTTP REQUEST

let request = new XMLHttpRequest();
console.log(request);

// SET UP THE REQUEST
request.open("Get", "https://jsonplaceholder.typicode.com/todos");

// SENDING THE REQUEST
request.send();
