// async makes any functions return a promise

async function giveone() {

    return 1; // equivalent to Promise.resolve(1);
}
giveone().then(one=>console.log(one));// returns one 

// await works only inside a async func

async function two() { // a async func
    
let promise=new Promise((res,rej)=>{ // a promise 
setTimeout(() => {
    res(2); // resolve to 2 after 1 sec.
}, 1000);
})


let a=await promise; // wait for the completion of promise
console.log(a);// output 2


}

two();

// await can work independently inside module



// error handling

async function fetchurl(url) {
    try{
    // try catch handles error
    let result=await fetch(url);

    console.log(result.url);

    }

    catch(err){

    throw new Error("Welp!");
    }
}

fetchurl('https://www.google.com'); // return the url

fetchurl('wrongurl.con')

// catch(error=>console.log("Wrong Url")); 

// catches handles error
