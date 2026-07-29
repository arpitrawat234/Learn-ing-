// catch handles error

fetch("blahblah.com")// wrong url 
.then(data=>console.log(data))
.catch(error=>console.log('Whats that'));// catch handles error


fetch("https://www.google.com/")
.then(data=>console.log(data))
.then(data=>read(data))//undefined functions
.catch(error=>console.log('Waah')) //catch handles error
.then(data=>console.log("catch handled error")); //then works again as normal


new Promise((reject,resolve)=>{   
throw new Error("Error");//act as implicit try catch
})
.catch(error=>console.log("Eroor catched",error));
