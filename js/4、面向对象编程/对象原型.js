// JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，
// 所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Student;
// 注意最后一行代码把xiaoming的原型指向了对象Student，看上去xiaoming仿佛是从Student继承下来的：

xiaoming.name; // '小明'
xiaoming.run(); // 小明 is running...
var Bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};

xiaoming.__proto__ = Bird;
// 现在xiaoming已经无法run()了，他已经变成了一只鸟：

xiaoming.fly(); // 小明 is flying...
// Object.create()方法可以传入一个原型对象，并创建一个基于该原型的新对象------------------------
// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
xiaoming.__proto__ === Student; // true