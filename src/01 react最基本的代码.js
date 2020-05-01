//假设,main.js还是我们的入口文件
// console.log('no');
//webpack-dev-server 打包好的 main.js 是托管到了内存中;所以我们在项目根目录中看不到
//但是我们可以认为项目根目录中有一个看不到的 main.js

//1- 这两个导入的时候  ,接收的名称必须这么写
import React from 'react';//创建组件,虚拟DOM元素,生周期
import ReactDOM from 'react-dom';//把创建好的虚拟DOM 放到页面上展示的


//2- 创建虚拟DOM 元素
//参数1: 创建元素的类型 ,字符串,表示元素的名称
//参数2: 是一个对象 或 null, 表示当前这个 DOM 的属性`
//参数3: 子节点 (包括 其他 虚拟DOM 获取子节点)
//参数n: 其他子节点
//<h1 id="myh1" title="this is a h1">这是一个大大的h1标签</h1>
// const myh1 = React.createElement('h1', null, '这是一个大大的h1');
// const myh1 = React.createElement('h1', {id:'myh1',title:'this is a h1'}, '这是一个大大的h1');
// const mydiv=React.createElement('div',null,'这是个div元素',myh1);

//渲染 页面上 DOM 结构最好的方式就是写HTML代码

//const mytest = <div>aaa</div>
//HTML 是最优秀的标记语言
//注意: 在 js 文件中,默认不能写这种类似于 HTML 的标记,否则打包回失败
//乐意使用babel 来转换 这些 js 中的标签;
//大家注意,这种在js中混合写入 HTML 的语法,叫做 JSX 语法; 符合 XML 规范的 js
//JSX 语法的本质 ,还是在运行的时候,被转换成了 React.reateElement 形式来执行的
//const mydiv =<div>6666</div>



//3- 使用 ReactDOM 把虚拟DOM 渲染到页面上
//参数1: 要渲染的那个DOM 元素
//参数2: 指定页面上的一个DOM元素,当做容器
ReactDOM.render(mydiv,document.getElementById('app'));
// Target container is not a DOM element. 经分析,猜测: 第二个参数接受的应该是一个 DOM元素 而不是选择器


//在Vue中 我们是这样写的
// const vm = new Vue({
//     data: {},
//     el: '#app',
//     methods: {}
// });


