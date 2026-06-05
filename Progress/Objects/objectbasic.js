
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
user[key]=true;
console.log(user["likes dog"]);//calling object value inside function

console.log(JSON.stringify(user));

// Parameter as the property names
function setStudent(name,id){
return{
name,//here the  parameter will be the key as well the value
id:id // here we define the id as parameter and a value same as name
}
}
let student=setStudent("Arpit",25);
console.log(JSON.stringify(student));
// we use in keyword key in object for finding if key property is there

//looping through property using for in 
for(let prop in student){
console.log(prop);
}



// objects copy

// objects unlike primitive are copied by reference

let animal={
name:"Lion",
habitat:"land"
}

// here animal->refer to object stored in memory

// let mammals=animal;
// animal still refer to object <- mammals also refer to it

// mammals.name="Cheetah";
// console.log(mammals.name);

// using object.assign to clone
let mammal={};
Object.assign(mammal,animal);
console.log(mammal.name);//cloned animal to mammal
mammal.status={
endangered:false,
threat:true
}
//objects can have objects as values and assign fails at cloning the nested objects we use structuredclone

animal = structuredClone(mammal);//cloned whole mammal
console.log(animal.status.endangered);


//***********Garbage Collections******************************
// The main things to know:

// Garbage collection is performed automatically. We cannot force or prevent it.
// Objects are retained in memory while they are reachable.
// Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole, as we’ve seen in the example above.