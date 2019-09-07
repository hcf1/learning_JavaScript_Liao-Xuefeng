// 以函数作为返回值---------------------------------------------------------
function lazy_sum(arr) {
  var sum = function () {
    return arr.reduce(function (x, y) {
      return x + y;
    });
  }
  return sum;
}
// f变量存储返回的sum函数
var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
console.log(f()); // 15
// 闭包：返回函数内部引用了外部的局部变量，如果外部函数的局部变量改变，调用内部函数时
// 其变量就是外部函数当前变量的值，而不是创建内部函数时外部函数变量的值
// 返回函数不要引用任何循环变量，或者后续会发生变化的变量。
function count() {
  var arr = [];
  for (var i = 1; i <= 3; i++) {
    arr.push((function (n) {
      return function () {
        return n * n;
      }
    })(i));
  }
  return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9
// 函数的立即执行，要将函数体用小括号括起来
(function (x) {
  return x * x;
})(3);
// 在没有class机制，只有函数的语言里，闭包封装私有变量---------------------------
// 无法直接访问函数中的一个变量，但是闭包机制将为其所有内部函数始终保存x变量
function create_counter(initial) {
  var x = initial || 0; //这里的x相当于create_counter的私有变量，外部代码无法访问
  return {
    inc: function () {
      x += 1;
      return x;
    }
  }
}
var c1 = create_counter()
console.log(c1.inc(), c1.inc(), c1.inc())
var c2 = create_counter(10)
console.log(c2.inc(), c2.inc(), c2.inc())
// 闭包的外部函数的参数也可以存储数据
function make_pow(n) {
  return function (x) {
    return Math.pow(x, n);
  }
}
// 创建两个新函数:先传入变量n，不需要在外部函数中将其保存，调用时可以直接使用
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343

// 函数调用一次后再立即执行----------------------------------------------------
var one = function (f) {
  return function () {
    return f();
  }
};
(one(function () {
  console.log('print 1 times');
}))();
// 箭头函数this总是指向词法作用域，也就是外层调用者obj，而this只能作用于本对象----
// 或本对象的第一层函数-------------------------------------------------------
// x=>x*x  等同于↓
// function (x) {
//   return x * x;
// }
// 对于单表达式x => ({ foo: x })，要用小括号括起来，避免冲突
var obj = {
  birth: 1998,
  getAge: function () {
    var b = this.birth; // 1998
    // 计算的值保存在fn中
    var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
    // 返回保存的值
    return fn();
  }
};
console.log(obj.getAge()); // 21
// generator由function*定义，return仅返回传入参数后的函数，每次next方法后会执行代码
// 每次遇到yield x;就返回一个对象{value: x, done: true/false}，generator可以保存对象
// 状态及把异步回调代码变成“同步”代码(在ajax中)
function* fib(max) {
  var
    t,
    a = 0,
    b = 1,
    n = 0;
  while (n < max) {
    yield a;
    [a, b] = [b, a + b];
    n++;
  }
  // 传入参数后只返回函数，
  return;
}
// 直接使用next遍历
var f = fib(5);
f.next(); // {value: 0, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 2, done: false}
f.next(); // {value: 3, done: false}
console.log(f.next()); // {value: undefined, done: true}
// 使用 for of 输出
for (var x of fib(10)) {
  console.log(x); // 依次输出0, 1, 1, 2, 3, ...
}
