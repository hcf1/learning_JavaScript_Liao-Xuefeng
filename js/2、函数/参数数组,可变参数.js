// 如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。
// 关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
// 类似Array但不是Array------------------------------------------------------------
function foo1(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo1(10, 20, 30);
// es6标准：rest可变参数-------------------------------------------------------------
function foo2(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
foo2(0,1,2,3,4,5)
