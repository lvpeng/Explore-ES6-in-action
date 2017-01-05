// /**
//  * Explore-ES6 (http://exploringjs.com/es6/ch_destructuring.html)
//  */
//
//
// /**
//  * Object Destructuring
//  */
//
// // 1 Destructuring objects
// const obj = {
//   first: 'peng',
//   last:  'Lyu',
// };
// const {first: f, last: l} = obj
// //f = 'peng' l = 'Lyu'
//
// // {prop} is short {prop: prop}
// const {first, last} = obj
// //first = 'peng' last = 'Lyu'
//
// // 2 processing return values
// const obj = {foo : 123};
// const {writable, configurable} = Object.getOwnPropertyDescriptor(obj, 'foo')


// http://zhouweicsu.github.io/javascript/2015/09/01/es6-destructuring-in-depth
/**
 * 解构在很多情况下都能派上用场。下面我例举一些最常用的场景。
 首先，我使用最多的一个场景是，在许多模块顶部的import声明中，解构可以从模块的公共API中
 只加载你需要的模块。举个栗子：
 */

/**
 * DEMO1 只加载需要的方法
 */

import {square, diag} from './math.js'  // import * as math from './math.js' 加载全部方法

console.log(square(4))
console.log(diag(3,4))


//第二个场景，当你的方法返回一个对象时，解构也让赋值变得非常简洁。
function getCoords (){
  return {x : 1, y: 2};
}
const {x, y} = getCoords();

//第三个使用场景， 函数定义参数 & 以及使用默认值
function random({ min = 1, max = 100}) {
  return Math.floor(Math.random() * (max - min)) + min
}

random({}) // {}不可以省略 , 否则报错
random({max = 200})


function random2({min = 1, max = 100} = {}){
  return Math.floor(Math.random() * (max - min)) + min
}

random2() // {} 可以省略


//使用解构 接收正则表达式返回值
var url = 'https://developer.mozilla.org/en-US/Web/JavaScript'
var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

var [ ,protocol, fullhost, fullpath] = parsedURL;
