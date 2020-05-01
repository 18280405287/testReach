// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'


let a = 10;
let str = '你好react';
let boo = true;
let ooo = 'asdas';
const h1 = <h1>发大水阿萨德阿萨德</h1>;
const arr = [
    <h2>aaa</h2>,
    <h3>fff</h3>
];
//方案1: 数组的filter方法  手动在外部进行循环  forEach没有返回值
const arrStr = ['11D', '22D', '33D', '44D'];
const nameArr = [];
//注意: react 中,需要把 key 添加给 被 forEach 或 map 或 for 循环直接控制的元素
nameArr.forEach(item => {
    const temp = <h5 key={item}>{item}</h5>;
    nameArr.push(temp)
});

//方案2: 数组的map方法,必须写return  对每一项进行指定操作,并且把指定操作的结果,当做新数组返回
// const result = arrStr.map(item => {
//     return item + '----'
// });
// console.log(result);


//当我们需要在 jsx 中写 js表达式了 ,需要用到 { }
ReactDOM.render(<div>
    {a + 2}
    <hr/>
    {str}
    <hr/>
    {boo ? '条件为真' : '条件为假'}
    <p title={ooo}>88888</p>
    {h1}
    <hr/>
    {/*{arr}*/}
    <hr/>
    {nameArr}
    <hr/>
    {/*方案3: 在函数内部循环 */}
    {arrStr.map(item => {
        return <h3 key={item}>{item}</h3>
    })}
    <hr/>
    {/*箭头函数的简易写法   推荐使用*/}
    {arrStr.map(item =><h3 key={item}>{item}</h3>)}
    <hr/>
    {/*防止冲突 ,zai react中 class 写成 className  label 的for属性 写成 htmlFor*/}
    <p className="mtele">666</p>
    <label htmlFor="ooo">1111</label>
</div>, document.getElementById('app'));