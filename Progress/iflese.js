let age = prompt("Whats your age")>=18
if(age){
alert("You can vote")
}
let gender = prompt("Whats your gender")
if(gender=='Male'){
alert("Hello King")
}
else{
alert("Hello Queen")
}


let result=prompt('How are you')=='Fine'?alert('Good'):alert('Sad')//ternary operator

let name=prompt("Whats the original js name")
if(name=='ECMASCRIPT'){
alert("right")
}
else{
alert("False")
}

let numbers=+prompt("Write a  number")
if(numbers>0){
alert(1);
}
else if(number<0){
alert(-1);
}
else{
alert(0);
}

const whatnumber=(numbers)=>{
if(numbers>0) alert(1)
else if(numbers<0) alert(-1)
else if(number==0) alert(0)
}


//?:

let result=a+b<4?'low':'high'


let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
// rewriting to ?:
message=(login=='Employee') ? 'Hello':(login=='Director')?'Greetings':(login=='')?'No login':''//here it acts as if else
    