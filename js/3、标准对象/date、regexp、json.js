// 获取系统时间-------------------------------------------------------------
var now = new Date();
now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
now.getFullYear(); // 2015, 年份
console.log(now.getMonth()); // 5, 月份，注意月份范围是0~11，5表示六月
now.getDate(); // 24, 表示24号
now.getDay(); // 3, 表示星期三
now.getHours(); // 19, 24小时制
now.getMinutes(); // 49, 分钟
now.getSeconds(); // 22, 秒
now.getMilliseconds(); // 875, 毫秒数
now.getTime(); // 1435146562875, 以number形式表示的时间戳
// 指定日期和时间-----------------------------------------------------------
// 符合ISO 8601格式的字符串：
var d = new Date(2015, 5, 19, 20, 15, 30, 123);
console.log(d)
// 解析后返回时间戳
var d = Date.parse('2015-06-24T19:49:22.875+08:00');
console.log(d) // 1435146562875
// 将时间戳转换成Date
var d = new Date(1435146562875);
console.log(d)
console.log(d.getDate())
// 时区--------------------------------------------------------------------
var d = new Date(1435146562875);
console.log(d.toLocaleString()); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
console.log(d.toUTCString()); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时
// 那么在JavaScript中如何进行时区转换呢？实际上，只要我们传递的是一个number类型的时间戳，我们就不用关心时区转换。任何浏览器都可以把一个时间戳正确转换为本地时间。

// 时间戳是个什么东西？时间戳是一个自增的整数，它表示从1970年1月1日零时整的GMT时区开始的那一刻，到现在的毫秒数。假设浏览器所在电脑的时间是准确的，那么世界上无论哪个时区的电脑，它们此刻产生的时间戳数字都是一样的，所以，时间戳可以精确地表示一个时刻，并且与时区无关。

// 所以，我们只需要传递时间戳，或者把时间戳从数据库里读出来，再让JavaScript自动转换为当地时间就可以了。

// 要获取当前时间戳，可以用：Date().getTime()
if (Date.now) {
  console.log(Date.now()); // 老版本IE没有now()方法
} else {
  console.log(new Date().getTime());
}
// RegExp，正则表达式-----------------------------------------------------------
var re1 = /ABC\-001/;//使用/.../包裹
// 转义字符，两种表达是一样的
var re2 = new RegExp('ABC\\-001');
// ------------------------------------------------------------------------------
var re = /^\d{3}\-\d{3,8}$/;
console.log(re.test('010-12345')); // true
re.test('010-1234x'); // false
re.test('010 12345'); // false
// 在正则表达式中，如果直接给出字符，就是精确匹配。用\d可以匹配一个数字，\w可以匹配一个字母或数字，所以：

// '00\d'可以匹配'007'，但无法匹配'00A'；

// '\d\d\d'可以匹配'010'；

// '\w\w'可以匹配'js'；

// .可以匹配任意字符，所以：

// 'js.'可以匹配'jsp'、'jss'、'js!'等等。
// 要匹配变长的字符，在正则表达式中，用*表示任意个字符（包括0个），用+表示至少一个字符，用?表示0个或1个字符，用{n}表示n个字符，用{n,m}表示n-m个字符：

// 来看一个复杂的例子：\d{3}\s+\d{3,8}。

// 我们来从左到右解读一下：

// \d{3}表示匹配3个数字，例如'010'；

// \s可以匹配一个空格（也包括Tab等空白符），所以\s+表示至少有一个空格，例如匹配' '，'\t\t'等；

// \d{3,8}表示3-8个数字，例如'1234567'。

// 综合起来，上面的正则表达式可以匹配以任意个空格隔开的带区号的电话号码。

// 如果要匹配'010-12345'这样的号码呢？由于'-'是特殊字符，在正则表达式中，要用'\'转义，所以，上面的正则是\d{3}\-\d{3,8}。

// 但是，仍然无法匹配'010 - 12345'，因为带有空格。所以我们需要更复杂的匹配方式。

// 进阶
// 要做更精确地匹配，可以用[]表示范围，比如：

// [0-9a-zA-Z\_]可以匹配一个数字、字母或者下划线；

// [0-9a-zA-Z\_]+可以匹配至少由一个数字、字母或者下划线组成的字符串，比如'a100'，'0_Z'，'js2015'等等；

// [a-zA-Z\_\$][0-9a-zA-Z\_\$]*可以匹配由字母或下划线、$开头，后接任意个由一个数字、字母或者下划线、$组成的字符串，也就是JavaScript允许的变量名；

// [a-zA-Z\_\$][0-9a-zA-Z\_\$]{0, 19}更精确地限制了变量的长度是1-20个字符（前面1个字符+后面最多19个字符）。

// A|B可以匹配A或B，所以(J|j)ava(S|s)cript可以匹配'JavaScript'、'Javascript'、'javaScript'或者'javascript'。

// ^表示行的开头，^\d表示必须以数字开头。

// $表示行的结束，\d$表示必须以数字结束。

// 你可能注意到了，js也可以匹配'jsp'，但是加上^js$就变成了整行匹配，就只能匹配'js'了。
// 切分字符串---------------------------------------------------------------------------
'a b   c'.split(' '); // ['a', 'b', '', '', 'c']
// 以至少一个空格隔开
'a b   c'.split(/\s+/); // ['a', 'b', 'c']
// 至少一个空格或一个逗号
'a,b, c  d'.split(/[\s\,]+/); // ['a', 'b', 'c', 'd']
// 加入;
'a,b;; c  d'.split(/[\s\,\;]+/); // ['a', 'b', 'c', 'd']
// 分组exec()----------------------------------------------------------------------------
// 如果正则表达式中定义了组，就可以在RegExp对象上用exec()方法提取出子串来。
// exec()方法在匹配成功后，会返回一个Array，第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串。
// exec()方法在匹配失败时返回null。
var re3 = /^(\d{3})-(\d{3,8})$/;
re3.exec('010-12345'); // ['010-12345', '010', '12345']
re3.exec('010 12345'); // null
// 时间识别
var re4 = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
re4.exec('19:05:30'); // ['19:05:30', '19', '05', '30']
// 月-日识别
var re4 = /^(0[1-9]|1[0-2]|[0-9])-(0[1-9]|1[0-9]|2[0-9]|3[0-1]|[0-9])$/;
// 贪婪匹配，正则匹配默认贪婪匹配，加个？采用非贪婪匹配（第一个组尽可能少匹配）
// var re = /^(\d+)(0*)$/;
// re.exec('102300'); // ['102300', '102300', '']
var re5 = /^(\d+?)(0*)$/;
console.log(re5.exec('102300')); // ['102300', '1023', '00']
// 全局搜索------------------------------------------------------------------------------
// 全局匹配可以多次执行exec()方法来搜索一个匹配的字符串。当我们指定g标志后，每次运行exec()，
// 正则表达式本身会更新lastIndex属性，表示上次匹配到的最后索引：

var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re5 = /[a-zA-Z]+Script/g;

// 使用全局匹配:
re5.exec(s); // ['JavaScript']
re5.lastIndex; // 10

re5.exec(s); // ['VBScript']
re5.lastIndex; // 20

re5.exec(s); // ['JScript']
re5.lastIndex; // 29

re5.exec(s); // ['ECMAScript']
re5.lastIndex; // 44

re5.exec(s); // null，直到结束仍没有匹配到
// 全局匹配类似搜索，因此不能使用/^...$/，那样只会最多匹配一次。
// 正则表达式还可以指定i标志，表示忽略大小写，m标志，表示执行多行匹配。

// JSON序列化-----------------------------------------------------------------------------
// json数据类型,全部用''，字符串用'""'
// number：和JavaScript的number完全一致；
// boolean：就是JavaScript的true或false；
// string：就是JavaScript的string；
// null：就是JavaScript的null；
// array：就是JavaScript的Array表示方式——[]；
// object：就是JavaScript的{ ... }表示方式。
var xiaoming = {
  name: '小明',
  age: 14,
  gender: true,
  height: 1.65,
  grade: null,
  'middle-school': '\"W3C\" Middle School',
  skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(xiaoming)
console.log(s)
var s1 = JSON.stringify(xiaoming, ['name'], ' ')//添加空格，换行符（隐式），只输出name
console.log(s1)

// 传入函数,将字符串转化成大写
function convert(key, value) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
}

console.log(JSON.stringify(xiaoming, convert, '  '));
// toJSON方法直接返回JSON应该序列化的数据：
var xiaoming = {
  name: '小明',
  age: 14,
  gender: true,
  height: 1.65,
  grade: null,
  'middle-school': '\"W3C\" Middle School',
  skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
  toJSON: function () {
    return { // 只输出name和age，并且改变了key：
      'Name': this.name,
      'Age': this.age
    };
  }
};

console.log(JSON.stringify(xiaoming));// '{"Name":"小明","Age":14}'
// 反序列化，将json格式的内容变成JavaScript的----------------------------------------------
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45
// 传入函数，string，function(key,value)
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
  if (key === 'name') {
    return value + '同学';
  }
  return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}
// 获取天气,在浏览器中可以执行
var url = "https://api.openweathermap.org/data/2.5/forecast?q=Beijing,cn&appid=800f49846586c3ba6e7052cfc89af16c"
$.getJSON(url, function (data) {
  var info = {
    city: data.city.name,
    weather: data.list[0].weather[0].main,
    time: data.list[0].dt_txt
  };
  alert(JSON.stringify(info, null, " "))
})

