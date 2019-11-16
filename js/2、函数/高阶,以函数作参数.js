'use strict';

//高阶函数--------------------------------------------------------
function add(x, y, f) {
  return f(x) + f(y);
}

var x = add(-5, 6, Math.abs); // 11，此处传入函数f
console.log(x);

//map,本质上是高阶函数，把数组中的每一个数都进行函数运算-------------
function pow(x) {
  return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);
// reduce,前两个数计算后作为下一次计算的第一个参数--------------------
// [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var arr1 = [1, 3, 5, 7, 9];
arr1.reduce(function (x, y) {
  return x + y;
}); // 25
//reduce封装一层函数------------------------------------------------
function product(arr) {
  var a
  a = arr.reduce(function (x, y) {
    return x * y
  })
  return a
}

console.log(product([1, 2, 3, 4]))
// filter作用域每个元素，根据true or false过滤指定元素，true返回剩余的元素------
// return s && s.trim(); // 注意：IE9以下的版本没有trim()方法，可去除空格
// trim()方法删除字符串头尾空格，返回删除后的结果，不改变原来的字符串
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
  // 是奇数时返回true
  return x % 2 !== 0;
});
console.log(r); // [1, 5, 9, 15]
//去重
var r,arr = ['ss',['dd'],'ss']//[ 'ss', [ 'dd' ] ]
r=arr.filter(function(value,index,number){
  return number.indexOf(value)===index//如果number中出现第一个value值的索引等于它的索引
})
console.log(r);
// 排序算法:满足对于两个元素x和y，如果认为x < y，返回-1或小于0的数，x==y，返回0
// sort方法会先将所有元素先转换为String再排序，结果'10'排在了'2'的前面
// 因为字符'1'比字符'2'的ASCII码小。---------------------------------------
console.log([10, 20, 1, 2].sort()); // [1, 10, 2, 20]
// sort()方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序。
var b = [10, 20, 1, 2]
b.sort(function (x, y) {
  if (x > y) {
    return 0.001;//1
  }
  else if (x < y) {
    return -0.1;//-1.小于 0 ，那么 x 会被排列到 y 之前；
  }
  else {
    return 0;
  }
})
//sort会直接对当前Array进行修改，返回本身
console.log("排序结果："+b);
// every，可以判断数组的所有元素是否满足测试条件。----------------------------
console.log([0, 0,'sfaf','dd'].every(function(x) {
  return x.length > 1;
}))//返回true or false
// find 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined---
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.find(function (s) {
    return s.toLowerCase() === s;
})); // 'pear', 因为pear全部是小写

console.log(arr.find(function (s) {
    return s.toUpperCase() === s;
})); // undefined, 因为没有全部是大写的元素
// findIndex也是查找符合条件的第一个元素，返回这个元素的索引，没找到，返回-1------
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.findIndex(function (s) {
    return s.toLowerCase() === s;
})); // 1, 因为'pear'的索引是1

console.log(arr.findIndex(function (s) {
    return s.toUpperCase() === s;
})); // -1
// forEach和map类似常用于遍历数组，传入的函数不需要返回值----------------------
var arr = ['Apple', 'pear', 'orange'];
arr.forEach(console.log); // 依次打印每个元素,自动接收第一个参数
