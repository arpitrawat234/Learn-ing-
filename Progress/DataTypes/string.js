let names='Arpit';
let middlename="ram";
let lastname=`Rawat`;
console.log(names+" "+middlename+" " +lastname);



names=`Arpit
*rawat
and 
some very long names`


console.log(names+" "+middlename+" " +lastname);


names="Arpit\nRawat";

console.log(names);

console.log( 'I\'m the Walrus! \\ represent backslash' ); // I'm the Walrus!


console.log("Arpit\n".length);//6
console.log("Arpit"[0]);//Return A
console.log("Arpit"[-1]);//Return undefined 
console.log("Arpit".at(0));//Return A
console.log("Arpit".at(-1));//Return t
console.log("Arpit".endsWith("it"));//Return true
console.log("Arpit".startsWith("it"));//Return false
console.log("Arpit".indexOf("A"));//Return 0
for(let char of "Arpit"){
console.log(char);
}
console.log( 'Interface'.toUpperCase() ); // INTERFACE
console.log( 'Interface'.toLowerCase() ); // interface

//**********Strings are immutables in nature */
console.log("Arpit".indexOf("A",1));//Return -1 as it satrt searching from 1th pos

console.log("Arpit".includes("it",3));
console.log("Arpit".slice(-4,-1));
console.log("Arpit".substring(0,3));
console.log("Arpit".substring(3,0));
// str.substr(start [, length])
console.log( 'ostrich'.localeCompare('Zealand') ); // -1 for comparing the two string in languages not by the code values