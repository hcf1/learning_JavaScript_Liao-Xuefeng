// Javascript中所有的对象都是Object的实例，并继承Object.prototype的属性和方法，
// 也就是说，Object.prototype是所有对象的爸爸。（个人感觉搞清楚这一点很重要） 。

// 在对象创建时，就会有一些预定义的属性，其中定义函数的时候，
// 这个预定义属性就是prototype,这个prototype是一个普通的对象。

// 而定义普通的对象的时候，就会生成一个__proto__，这个__proto__指向的是这个对象的构造函数的prototype.
// 构造函数可以用new返回一个对象
function Student(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + this.name + '!');
    }
}
var xiaoming = new Student('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!
// Student.prototype==xiaoming.__proto__。prototype是构造函数的属性，__prto__是实例的属性
// __prto__指向它构造函数的prototype
// 也就是说Object.prototype是所有函数的爹，当你声明一个函数的时候也就是相当于对Object的实例化
console.log(xiaoming.__proto__,xiaoming.__proto__.__proto__,xiaoming.prototype);
console.log(Student.prototype,Student.prototype.__proto__,Student.prototype.prototype);
// -----------------------------------------------------------------------------------------
// Object.__proto__ 可以理解为是一个指针，指向了构造函数的原型对象，由于Objec是一个构造函数，
// 函数继承自Function.prototype,所以此处 
// Objec.__proto__ === Function.prototype;
// Object.prototype 是作为构造函数的Object的原型对象，比较有意思的是，
// 由于Function.prototype也是一个对象，所以它也继承自Object,所以
// Function.prototype.__proto__ === Objec.prototype;
// 所以，你要问他们有什么关系 
// Object.__proto__.__proto__ === Object.prototype
console.log(Student,Student.__proto__,Student.__proto__.__proto__);
console.log(Object,Object.__proto__,Object.__proto__.__proto__);
// 调用构造函数千万不要忘记写new。为了区分普通函数和构造函数，按照约定，构造函数首字母应当大写，
// 而普通函数首字母应当小写，这样，一些语法检查工具如jslint将可以帮你检测到漏写的new。
// 创建对象的构造函数--------------------------------------------------------------------------
function Student1(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}
// 给构造函数的原型对象添加方法
Student1.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};
// 创建对象的函数
function createStudent1(props) {
    return new Student1(props || {})
}
// 这个createStuden1t()函数有几个巨大的优点：一是不需要new来调用，二是参数非常灵活，可以不传，也可以这么传：
// 创建对象
var xiaoming = createStudent1({
    name: '小明'
});
console.log(xiaoming.grade); // 1
// constructor在prototype中指向函数构造器（函数本身）------------------------------------------
// 用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身：
xiaoming.constructor === Student.prototype.constructor; // true
Object.getPrototypeOf(xiaoming) === Student.prototype; // true
xiaoming instanceof Student; // true
console.log(Student.prototype.constructor === Student);  // true