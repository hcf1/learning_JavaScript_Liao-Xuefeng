'use strict'
console.log('a')
// alert("fd")
// 唯一判断nan的方法,===表示不转换类型就进行对比,分数对比时小于某个阈值都成立
// console.log(isNaN(NaN),false==0,false ===0,Math.abs(1/3-(1-2/3))<0.000001)
let a = [1, '55', '22kjh']
console.log(a)
// 字典形式
var b = {
  name: "hcf",
  age: 20,
  city: "dalian",
}
console.log(b.name)
// 全局变量，当使用严格模式时未使用var申明的变量将报错
// i=100

// 转义字符，还可以用\u####表示一个Unicode字符
console.log('\u4e2d\u6587')
// 多行字符串
var c = `这是一个
多行字符串
用反引号表示`
console.log(c)
// 模板字符串
console.log(`你好，${b.name},今年${b.age}岁了`)
// 字符串函数,字符串是不可变对象，不能改变字符串中的某个字符
var s = 'Hello'
var d=s.toUpperCase()
// 查找字符,返回元素在对象中第一次出现的下标
console.log(a.length, a[0], d, b.name.indexOf('cf'))
// 切片
console.log(b.name.slice(0, 2))
// 数组越界不会报错
a[5] = b.name
console.log(a)
// 在元素末尾添加或删除
console.log([3,"删除最后一个元素并且返回被删除的元素"].pop())
a.push('新添加的元素')
console.log(a)
// 在元素头部添加或者删除元素
var e =[2,4]
e.unshift('5')
console.log(["删除第一个元素并且返回它",3].shift(),e)
// sort排序，reverse反转，splice（x,y,z），从x开始删除y个元素，再添加z
// concat连接两个字符串并返回一个新的，join('-')每个字符之间都用-隔开
// JavaScript的多维数组同c语言