// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'


// 2. 创建虚拟DOM元素
// const mydiv = <div id="mydiv" title="div aaa">
//     这是一个div元素
//     <h1>这是一个大大的H1</h1>
//     </div>
//装包时 webpack4.x 和 babel有冲突
//必须用 webpack4.x he babel7.x相匹配
//如  cnpm i @babel/core babel-loader @babel/preset-env @babel/preset-react -D


// 3. 调用 render 函数渲染
ReactDOM.render(mydiv, document.getElementById('app'));