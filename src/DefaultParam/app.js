function f(x, y = 12){
  return x + y;
}

console.log(f(1)) //13


function f(x, ...y){
  return x + y.length;
}
console.log(f(1, 2, 3)); // 3

function f(x, y, z) {
  return x + y + z ;
}

f(...[1,2,3]) //6
