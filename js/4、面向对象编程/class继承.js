class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}
// 比较一下就可以发现，class的定义包含了构造函数constructor和定义在原型对象上的函数hello()
// （注意没有function关键字），这样就避免了Student.prototype.hello = function () {...}这样分散的代码。
// 最后，创建一个Student对象代码和前面章节完全一样：

var xiaoming = new Student('小明');
xiaoming.hello();
// es6特性极大简化继承
// class继承--------------------------------------------------------------------------------
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}
