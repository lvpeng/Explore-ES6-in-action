// The spread syntax allows an expression to be expanded in places
//    where multiple arguments (for function calls) or multiple elements (for array literals) or
//    multiple variables  (for destructuring assignment) are expected.

// In ES5
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);

//we can replace above with es2015 spread operator
function myFunction(x, y, z){}
var args = [0,1,2];
myFunction(...args);

//Any argument in the argument list can use
// the spread syntax and it can be used multiple times.
function f(x,y,z, m,n){
  return x + y + z + m + n;
}
var args = [0,1];
f(..args, 2, 3, ...[4]);

f.apply(null, args)
f(...args)

// A more powerful array literal
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]

// Apply for new
// Example: In ES5 it is not possible to
// compose new with apply. (In ES5 terms, apply does a [[Call]] and not a [[Construct]].)
// In ES2015 the spread syntax naturally supports this:
var dateFields = readDateFields(database);
var d = new Date(...dateFields);


//Copy an array
var arr = [1,2,3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1,2,3,4]
// arr remains unaffected


//A better push
var arr1 = [1,2,3]
var arr2 = [4,5,6]
arr1.push(...arr2)
