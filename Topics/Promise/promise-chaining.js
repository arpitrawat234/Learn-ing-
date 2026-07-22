new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

    console.log(result); // 1
    return result * 2;

}).then(function(result) { // (***)

    console.log(result); // 2
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result*2)
        }, 1000);
    })

}).then(function(result) {

    console.log(result); // 4
    return result * 2;

});

fetch('https://dummyjson.com/users')
  // .then below runs when the remote server respond
  .then(function(response) {
    // response.text() returns a new promise that resolves with the full response text
    // when it loads
    while(!response){
    setTimeout(()=>console.log("Wait while fetching ....."),1000)}
    return response.text();
  })
  .then(function(text) {
    // ...and here's the content of the remote file
    
    console.log(JSON.parse(text).users[0].firstName); // 
  });



// loadScript("/article/promise-chaining/one.js")
//   .then(script => loadScript("/article/promise-chaining/two.js"))
//   .then(script => loadScript("/article/promise-chaining/three.js"))
//   .then(script => {
//     // scripts are loaded, we can use functions declared there
//     one();
//     two();
//     three();
//   });