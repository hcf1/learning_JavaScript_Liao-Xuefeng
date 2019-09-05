var xiaoming = {
  name: "小明",
  'middle-school': 'NO.3高中'
}
// 访问一般属性和特殊属性
console.log(xiaoming.name, xiaoming['middle-school'])
// 动态添加和删除属性
xiaoming.age = 18
console.log(xiaoming)
delete xiaoming.name
console.log(xiaoming)
// 判断对象是否有某个属性,如果是继承属性也是true
console.log('age' in xiaoming)
// map键值对，支持以任意类型作为键，对象中只能是字符串作为属性名
var m = new Map([
  ["dd", 88],
  [8, 'ff']
])
console.log(m.get('dd'), m.get(8))
// map添加和删除
m.set(9, 999)
m.delete('dd')
console.log(m)
// set与map相似，但无value值
var s = new Set([
  [1, 's', m]
])
s.add('d')
console.log(s)
s.delete('d')
console.log(s)
// iterable，可迭代的对象，Array、Map和Set都属于iterable类型
// for...of结构不会遍历全部对象属性，只循环集合本身的元素
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
  console.log(x); // '0', '1', '2', 'name'
}
// --------------------------------------------------------------
var a1 = ['A', 'B', 'C'];
a1.name = 'Hello';
for (var x of a1) {
  console.log(x); // 'A', 'B', 'C'
}
// iterable对象内置forEach方法，回调函数
var a2 = ['A', 'B', 'C'];
a2.forEach(function (element, index, array) {
  // element: 指向当前元素的值
  // index: 指向当前索引
  // array: 指向Array对象本身
  console.log(element, index, array);
});
// Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：
// Map的回调函数参数依次为value、key和map本身：