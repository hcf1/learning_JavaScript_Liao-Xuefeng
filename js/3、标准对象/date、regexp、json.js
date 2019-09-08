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
// RegExp