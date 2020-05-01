// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

//导入组件
//如果不做单独的配置的话,不能省略 .jsx 后缀名
// import Hello from './components/Hello'

//注意: 这里的这个 @ 符号 表示我们项目根目录中的src 这一层目录
import Hello from '@/components/Hello'


const dog={
    name:'大黄',
    age:3,
    gender:'雄'
};

ReactDOM.render(<div>
    {/*直接把 组件的名称 以标签的的形式 丢到页面上 */}
    {/*<Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>*/}
    {/*展开运算符 ES6里面的语法特性*/}
    {/*展开运算符: 可以把一个对象或数字中的属性或项,展开了,放到里一个对象或者是数组上 */}
    <Hello {...dog}></Hello>
</div>, document.getElementById('app'));

//要求 让 o1 拥有 o2 的所有属性和方法

//方案1: 笨方法,一个一个拿
// var o2={
//     age:18,
//     address:'中国成都',
//     phone:'116655'
// };
// var o1={
//     name:'zs',
//     age:o2.age,
//     address:o2.address,
//     pahone:o2.phone
// };
// console.log(o1);

//方案2: 使用 ES6 的 展开运算符
var o2={
   age:18,
   address:'中国成都',
    phone:'116655'
};
var o1={
    name:'zs',
    ...o2
};