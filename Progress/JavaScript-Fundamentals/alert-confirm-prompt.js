/*
We covered 3 browser-specific functions to interact with visitors:

alert
shows a message.
prompt
shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
confirm
shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
*/

let name = alert('Arpit');

let age= prompt('Enter your age','should be a number like 1')

let gender = confirm('are you a male');

alert(`Hey Arpit of ${age} year old 
${gender==true ? 'male' : female}
`)
alert(Boolean(5));
