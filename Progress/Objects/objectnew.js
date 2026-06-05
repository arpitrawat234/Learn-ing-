//constructors in js
// has to have a capital in start
// called by new

function User(name){
this.name=name;
this.isAdmin=false;
//more complex code can be added

//return behavior
return;//return the  object itself;
}

let user1=new User("Arpit");
console.log(JSON.stringify(user1));
console.log(new User("Arpita").name);// you have to use new always

function Student(name){
this.name=name;
this.isAdmin=false;
//more complex code can be added
// creating function in this
this.say=function(){
console.log("Say");
}
//return behavior
// return {
// name:"Human"
// };//return overwrite this by returning the object


}
console.log(new Student("Arpita").say());// you have to use new always
// console.log(new Student); works without()


// let obj={};
// function A() { 
// return obj;
//  }
// function B() { 
// return obj;
//  }

// let a = new A();
// let b = new B();

// console.log( a == b ); // true