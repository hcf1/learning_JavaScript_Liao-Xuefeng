// window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度。
// 内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽高。

// 兼容性：IE<=8不支持。
console.log("window inner size:"+window.innerHeight+'x'+window.innerWidth);
// 对应的，还有一个outerWidth和outerHeight属性，可以获取浏览器窗口的整个宽高。
// navigator=============================================================================
// navigator.appName：浏览器名称；
// navigator.appVersion：浏览器版本；
// navigator.language：浏览器设置的语言；
// navigator.platform：操作系统类型；
// navigator.userAgent：浏览器设定的User-Agent字符串。
console.log('appName = ' + navigator.appName);
console.log('appVersion = ' + navigator.appVersion);
console.log('language = ' + navigator.language);
console.log('platform = ' + navigator.platform);
console.log('userAgent = ' + navigator.userAgent);
// screen表示显示屏的信息==================================================================
// screen.width：屏幕宽度，以像素为单位；
// screen.height：屏幕高度，以像素为单位；
// screen.colorDepth：返回颜色位数，如8、16、24。
console.log('Screen size = ' + screen.width + ' x ' + screen.height);//Screen size = 1920 x 1080
// location===============================================================================
// location对象表示当前页面的URL信息。例如，一个完整的URL：
// http://www.example.com:8080/path/index.html?a=1&b=2#TOP
// 可以用location.href获取。要获得URL各个部分的值，可以这么写：
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'
// 要加载一个新页面，可以调用location.assign()。
// 如果要重新加载当前页面，调用location.reload()方法非常方便。
if (confirm('重新加载当前页' + location.href + '?')) {
    location.reload();
} else {
    // '/'访问当前ip根目录
    location.assign('/'); // 设置一个新的URL地址
}
// 跳向任意网页
window.location.href='http://www.baidu.com';
// document================================================================================
// document对象表示当前页面。
// 由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点。
// document的title属性是从HTML文档中的<title>xxx</title>读取的，但是可以动态改变：
// 动态改变页面的title，浏览器窗口标题发生变化
document.title = '努力学习JavaScript!';
