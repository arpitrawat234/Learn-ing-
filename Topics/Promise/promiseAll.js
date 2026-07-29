

//Usersnames array ---->
users=['arpitrawat234','remy'];

//   map username to fetch 
let requests=users.map(user=>fetch(`https://api.github.com/users/${user}`));



Promise.all(requests) // runs all fetch asynchronously
.then(responses=>{

for(let response of responses){

console.log(response.url);

}

return responses;// return the responses of all fetches in []

})


.then(responses => 

    Promise.all(responses.map(r=>r.json()))) // map each fetches to jsons 
    
    .then(userdata=>userdata.forEach(element => {

    console.log(element.name);

}));