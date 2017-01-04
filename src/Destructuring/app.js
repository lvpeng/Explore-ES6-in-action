//The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.

const user = { name: 'Evan Lyu', age: 0}
const { name, age } =  user

console.log(`My name is ${name} and I'm  ${age} old`)

//Systax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// basic useage
var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2


// spread operators
[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

//Object destructuing assignment
({a, b} = {a:1, b:2})
console.log(a); // 1
console.log(b); // 2
//
// // ES7 - not implemented in Firefox 47a01
// ({a, b, ...rest} = {a:1, b:2, c:3, d:4});

var x = [1,2,3,4,5]
var [y,z] = x;
console.log(y)
console.log(z)

/**
 * Array destructuring
 */

var foo = ['one','two']
var [one, two, three] = foo
console.log(two)


// 1. Assignment separate from declaration
var a, b;
[a, b] = ['you','me']


// 2. Default value
[a  =1, b = 2] = [3]
console.log(a); // 3
console.log(b); // 2


//3. Swapping variables
var a = 1;
var b = 3;
[a, b] = [ b,a ]

// 4.Parsing an array returned from a function

function f(){
  return [1,3]
}

var a, b
[a,b] = f()


// 5.Ignoring some returned values
function f(){
  return [1,2,3]
}
var [a, , b] = f()


//6. Ignore all values
[,,] = f()


// 7. Assigning the rest of an array to a variable
var [a, ...b] = [1,2,3]


// 8. Pulling values from a regular expression match

var url = 'https://developer.mozilla.org/en-US/Web/JavaScript'
var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

var [ ,protocol, fullhost, fullpath] = parsedURL;

/**
 * Object Destructuring
 */
// 1. basic assignment
var o = {p: 42, q: true}
const {p, q} = o

// 2. Assignment without declaration
var name, age;
({name, age} = {age: 28, name: 'lvpeng'})

//3. Assigning to new variable names
var o = {p: 42, q: true}
const {p:zee, q:baa} = o


//4. Default values
var {a=10, b = 23} = {a: 1}

//5. Setting a function parameter's default value

function userInfo({name='tom', age=20, sex="boy"}= {}){
  console.log(name, age, sex);
}
userInfo({name:'Evan Lyu', age: 0})


//6.For of iteration and destructuring
var people = [
  {
    name: 'Evan Lyu',
    family: {
      father: 'Peng Lyu',
      mother: 'Xifan Xi',
    },
    age: 0,
  },
  {
    name: 'Evan You',
    family: {
      father: 'Tom',
      mother: 'Lucy',
    },
    age: 27,
  }
]

for (var {name: n, family: { father: f }} of people) {
  console.log(`name is ${n} and father is ${f}` )
}

//or
// for (var u of people ){
//   console.log(`name is ${u.name} and father is ${u.family.father}` )
// }
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar
