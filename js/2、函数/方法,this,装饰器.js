// this它始终指向当前对象，如果单独调用函数，该函数的this指向全局对象，也就是window。
//原因是this指针只在age方法的函数内指向xiaoming，在函数内部定义的函数，this又指向undefined了！
// （在非strict模式下，它重新指向全局对象window！），即this只在对象的第一层函数中指向该对象
//=>箭头函数中的this始终指向其外层对象-----------------------------------------
'use strict';

var xiaoming = {
  name: '小明',
  birth: 1990,
  age: function () {
    var that = this; // 在方法内部一开始就捕获this
    function getAgeFromBirth() {
      var y = new Date().getFullYear();
      return y - that.birth; // 用that而不是this
    }

    return getAgeFromBirth();
  }
};

xiaoming.age(); // 25
//apply方法接收两个参数，第一个参数就是该方法需要绑定的this变量(对象)，
// 第二个参数是Array，表示函数本身的参数。---------------------------------------
function getAge() {
  var y = new Date().getFullYear();
  return y - this.birth;
}

var xiaoming1 = {
  name: '小明',
  birth: 1990,
  age: getAge
};

xiaoming1.age(); // 25
getAge.apply(xiaoming1, []); // 25, this指向xiaoming, 参数为空
//call同apply，仅传参方式不同---------------------------------------------------
Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5
//装饰器（在浏览器中可运行）：利用可动态改变函数行为这一特性-----------------------
// var count = 0;
// var oldParseInt = parseInt; // 保存原函数
//
// window.parseInt = function () {
//   count += 1;
//   return oldParseInt.apply(null, arguments); // 调用原函数
// };
// parseInt('10');
// parseInt('20');
// parseInt('30');
// console.log('count = ' + count); // 3
