// 变量提升,把所有申明的变量“提升”到函数顶部：只提升声明，不提升赋值----------------------
'use strict';

function foo() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}

foo();
// 命名空间，减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中-----------
var namespace ={}
namespace.name="kdfh"
namespace.fff=function() {
  return "ffff"
}
console.log(namespace);
// 全局作用域，JavaScript默认有一个全局对象window，
// 全局作用域的变量实际上被绑定到window的一个属性：-------------------------------------
var course = 'Learn JavaScript';
console.log(course); // 'Learn JavaScript'
// alert(window.course); // 'Learn JavaScript',只在浏览器中可以执行
// 局部作用域,var的作用域是函数内部let是块级作用域-------------------------------------
function foo2() {
  for (var i=0; i<100; i++) {
    //
  }
  i += 100; // 仍然可以引用变量i
}
function foo1() {
  var sum = 0;
  for (let i=0; i<100; i++) {
    sum += i;
  }
  // SyntaxError:语法错误
  // i += 1;
}
//常量------------------------------------------------------------
const PI = 3.14;
console.log(PI)
//解构赋值，对应赋值
// var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
// console.log(x,y,z)
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
// let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
//对象属性解构赋值(一一对应赋值)es6特性-----------------------------------------------
var person = {
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school',
  address: {
    city: 'Beijing',
    street: 'No.1 Road',
    zipcode: '100001'
}
};
var {name, age, passport,address:{city},a="默认值"} = person;
console.log(x, y, z);
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport+ ', city = ' + city);
//解构后改名------------------------------------------------------------
// let {name, passport:id} = person;
// console.log(name); // '小明'
// console.log(id); // 'G-12345678'
//解构使用默认值------------------------------------------------------------
// var {name, single=true} = person;
// name; // '小明'
// single; // true
