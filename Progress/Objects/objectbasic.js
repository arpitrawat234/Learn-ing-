//creating a object using object =constructor
let users=new Object();

//object literal
let user={
"name":"Arpit Rawat",// properties of object name age
"Age":25,
educated:true // properties without ""
}
console.log(user.Age);
console.log(user.name);

user.gender="Male"; //defining a new property

console.log(user.gender);

delete user.gender;//deleting the object properties

console.log(user.gender);

console.log(user.educated);

// if we have a key that have spaces long words like "likes dogs" 
//use sqaure notations

let key="likes dog"
// user.key=true; wrong for dot use without space

console.log(user["likes dog"]);//calling object value inside function

