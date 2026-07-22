
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
// these will be ignored
// Function properties (methods).
// Symbolic keys and values.
// Properties that store undefined.
// error in circular reference
};

console.log(JSON.stringify(student,function kuchbhi(key,values){
return (key=="isAdmin")?"Noone":values;
},4));

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
userData=JSON.parse(userData);
console.log(userData.friends[1]);
console.log( numbers[1] ); // 1

let user = {
  name: "John Smith",
  age: 35
};

let User=JSON.parse(JSON.stringify(user));  

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
    if((key != "")&&(value==meetup)){//cannot use "meetup"
    return undefined;
    }
    return value;
}));