let user={
name:"Arpit",
age:27,
education:{
school:"Tps",
college:"Mait",
Dateofbirth:2026-globalThis.age
},

"Gender":"male"

}

user.name="Arpita"
delete user.name;
user["Gender"]="Female";
user.name="Arpita"

for(let key in user){
console.log(key);
}

function User(name,age){
this.name=name;
this.age=age;
this.read=function(){
console.log("I can read");
}
}
let Arpit=new User("Arpit","22")
Arpit.read();