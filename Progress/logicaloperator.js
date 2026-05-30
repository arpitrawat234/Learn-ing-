let login=prompt("Enter your good name")
if(login=="Admin"){
let password=prompt("Enter your password")
if(password=="The Master"){
alert("WELCOME")
}
else if(password==" " || password==null){
alert("Canceled")
}
else{
alert("Wrong Password")
}
}
else if(login=="" || login==null){
alert("Canceled")
}
else{
alert("I dont know you")
}

