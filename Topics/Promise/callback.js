function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}



function load(script,callback){
}

load("something.js",function callback(error,script){

}
)
