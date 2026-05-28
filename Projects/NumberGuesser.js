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
//creating a number between the minimum and maximum
number = number.toString();

let guesscount=+prompt("Enter the number of guess you want")

for(let j =1;j<guesscount;j++){
let usernumber =prompt("Enter your Guess"+j)
while(!usernumber || usernumber.length!=length || isNaN(usernumber)){
alert("Enter exactly"+length+"digit numbers")
usernumber =prompt("Enter your Guess"+j)
}
//checking if the user input is not exceeding the selected number or is null or not a number using isNaN(is not a number)


let result=compare(number,usernumber,length)
//here we call the compare functions to compare the user guess to the selected number returning true or false
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
let freq={}
let i=0
let correct = 0
let result=Array(length).fill("❌")
for(let digits of number)//for..of gives values and for..in gives indexes or keys
{
    freq[digits]=(freq[digits] || 0)+1// as all falsey values are made false we can use nullish coalescing ?? for keeping null undefined as missing
}
while(i<length){
if(number[i]===usernumber[i]){
 result[i]="✅"
 freq[number[i]]--
 correct++
}
i++
}
i=0
while(i<length){
if(result[i]=="❌" && freq[usernumber[i]]>0){
    freq[usernumber[i]]--
    result[i]="🟠"
}
  i++
}
alert(usernumber +"---->"+ result.join(" "));// its used to join arrays 
return correct===length
}

//TODO
/***
 FIRST INSERT THE VALUE VERIFYING LOGIC
 SECOND IMPROVE UI
 REMOVE REPETITION
 MAKE A DOM HTML GAME
 ***/
