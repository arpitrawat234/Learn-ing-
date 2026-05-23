let length=+prompt("Enter the length of number you want to guess (1 to 3)")

while (length>3 || length< 1){
length=+prompt("Number should be between 1 to 3 to make it fun 😁");
}

alert("You choose "+length)
let points=0;
let min = 10 ** (length - 1);
let max = 10 ** length - 1;
let won=false;
let number = Math.floor(Math.random() * (max - min + 1)) + min;


for(let j =1;j<4;j++){
let usernumber =prompt("Enter your Guess"+j)
while(!usernumber || usernumber.length!=length || isNaN(usernumber)){
alert("Enter exactly"+length+"digit numbers")
usernumber =prompt("Enter your Guess"+j)
}
let result=compare(number,usernumber,length)
if(result){
points=points+100
won=true
alert("Yay correct guess")
break
}
}

if(!won){
alert("Better Luck Next Time, The Answer was " + number)
}
else{
alert("Your points "+points)
}



function compare(number,usernumber,length){
let temp=String(number)
let usertemp=String(usernumber)
let guess=""
let i=0
let correct=0
while(i<length){
if(temp[i]!=usertemp[i]){
guess=guess+"❌"
}
else{
guess=guess+temp[i]
correct++
}
i++
}

alert(guess);
alert(correct + " digits correct");

return correct==length
}