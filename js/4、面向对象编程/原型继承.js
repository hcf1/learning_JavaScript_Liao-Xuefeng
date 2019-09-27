// 对于继承，如果你想用最简单粗暴的方法这么干：

// PrimaryStudent.prototype = Student.prototype;
// 是不行的！如果这样的话，PrimaryStudent和Student共享一个原型对象，那还要定义PrimaryStudent干啥？

// 我们必须借助一个中间对象来实现正确的原型链，这个中间对象的原型要指向Student.prototype。
// 为了实现这一点，参考道爷（就是发明JSON的那个道格拉斯）的代码，中间对象可以用一个空函数F来实现：

// PrimaryStudent构造函数:
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}
// 只要在原型链上就是继承关系。
// 1、空函数F:
function F() {
}

// 2、把F的原型指向Student.prototype:
F.prototype = Student.prototype;

///3.1、把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
// 此处可把F看做一个原型对象，F的构造函数F的原型对象也是Student函数的原型对象。
// 构造函数创建一个新对象，这个对象继承构造函数的原型对象，即新对象在原型链上
// 3.2、让PrimaryStudent的原型指向新对象，那么PrimaryStudent的原型就是新对象，所以PrimaryStudent
// 也在原型链上，实现了PrimaryStudent继承Student。
PrimaryStudent.prototype = new F();

///4、把PrimaryStudent原型的构造函数修复为PrimaryStudent:
// PrimaryStudent.prototype的constructor其实是new F（）对象的constructor，其默认指向构造函数F。
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name; // '小明'
xiaoming.grade; // 2

// 验证原型:
xiaoming.__proto__ === PrimaryStudent.prototype; // true
xiaoming.__proto__.__proto__ === Student.prototype; // true

// 验证继承关系:
xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student; // true
// 封装继承方法----------------------------------------------------------------------------
// 把继承这个动作用一个inherits()函数封装起来，还可以隐藏F的定义，并简化代码：

function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
// 这个inherits()函数可以复用：

function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

function PrimaryStudent(props) {
    // 把函数Student放到PrimaryStudent中运行，props就是Student的参数
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};