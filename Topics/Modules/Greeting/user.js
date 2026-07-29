export let ask = prompt("Whats your name,John Doe");

let age=prompt("Whats your age");
let school = prompt("Whats class you in");


class User{
    
constructor(){
this.name=ask;
this.education=school;
this.yearage=age;
}
}

export default User;
export {age as yearold,school as edu};    