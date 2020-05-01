import React from 'react'

//第一种创建组建的方式,组件的首字母一定要大写
//创建组件,并暴露出去
export default function Hello(props){
    // 如果在一个组件中 return 一个 null. 则表示此组件是空的,什么都不会渲染
    //return null
    // 在组件中,必须返回一个合法的 jsx 虚拟DOM元素

    //console.log(props);
    //props.name='zx';//会报错
    //结论: 不论是vue 还是react 中的props 永远都是只读的,不能被重新赋值
    return <div>这是 Hello 组件 ---{props.name}---{props.age}---{props.gender}</div>
}
//把组件暴露出去
//export default Hello