// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
// function sayhi(name){
// console.log("Hi!",name);
// }

// let timerid=setTimeout(sayhi,1000,"Arpit");//after 1 seconds
// setTimeout(function drama(){
// console.log("Hello");
// setTimeout(drama,2000);
// },2000);

// let intervalid=setInterval(sayhi,1000);// after 1 seconds interval
// setTimeout((timerid,intervalid) => {
//     clearTimeout(timerid);
//     clearInterval(intervalid);
// }, 2000,timerid,intervalid);

function printNumbers(from, to) {
    let current = from;

    setTimeout(function counter() {
        console.log(current);
        current++;
        if (current <= to) {
            setTimeout(counter, 1000);
        }
    }, 1000);
}
printNumbers(100,102)
// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }

// // usage:
// printNumbers(5, 10);