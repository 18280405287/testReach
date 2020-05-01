// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

//第一种创建组建的方式,组件的首字母一定要大写
function Hello(props){
    // 如果在一个组件中 return 一个 null. 则表示此组件是空的,什么都不会渲染
    //return null
    // 在组件中,必须返回一个合法的 jsx 虚拟DOM元素

    //console.log(props);
    //props.name='zx';//会报错
    //结论: 不论是vue 还是react 中的props 永远都是只读的,不能被重新赋值
    return <div>这是 Hello 组件 ---{props.name}---{props.age}---{props.gender}</div>
}


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