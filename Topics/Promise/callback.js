function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

//Here this function have a callback that runs when  script is loaded.

// callback cannot be called after loadScript function seperatetly as loadscript runs asynchronously



function load(script,callback){
// load the script that is a asynchronous activity
// on error we call  callback function(error,script);
//onloading call callback function(script)
// callback uses some functions inside script
//append script
}

load("something.js",function callback(error,script){
// if error alert
// else load the other script
}
)
// error-first callback
