// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// console.log( getWeekDay(date) );        // should output "TU"
// function getWeekDay(date){
// let Day=['SU','MO','TU','WE','TH','FR','SA'];
// return Day[(date.getDate()+1)%Day.length];
// }

// date = new Date(2014, 0, 5); // 3 Jan 2014
// console.log( getWeekDay(date) ); // FR
// date = new Date(2015, 0, 2);

// function getDateAgo(date, num){
// let newdate=new Date(date);
// newdate.setDate(date.getDate()-num);
// return newdate.getDate();
// }

// console.log(getDateAgo(date,1));
// function getlastday(year,nums){
// let date=new Date(year,nums+1);
// date.setDate(0);
// return date.getDate();
// }

function getSecondsToday(){
let now=new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
return (now-today)/1000;;
}
console.log(getSecondsToday());
function getSecondsToTomorrow(){
let now=new Date();
let tommorrow=new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
return (tommorrow-now)/1000;
}
console.log(getSecondsToTomorrow());
function formatDate(date){
let now=new Date();
let diff=(now-date)/1000;

if(diff <= 1){
return "right now";
}
else if(diff<60){
return `${diff} seconds ago`;
}
else if(diff<3600){
   return `${diff/60} minutes ago`; 
}

return date.toDateString();
}   
console.log(formatDate(new Date(new Date - 86400 * 1000)) );