//class 抽离组件

import React from 'react'


export default class Moive extends React.Component{


    render() {
        return <div>
            这是Moive组件---
        </div>
    }
}


// import '@/12-class关键字创建组件'

// //class 关键创建组件
// class Moive extends React.Component{
//     //render函数 的作用: 是渲染 当前组件对应 的虚拟DOM元素
//     //render 是class 的一个 实例方法
//     render() {
//         // return null
//
//         //在class关键字创建的 组件中,如果想 使用外界传递过来的参数,不需接收,直接通过 this.props.xxx 就可以访问
//         return <div>
//             {/*注意: 在class 组件内部 this 表示,当前组件所对应的的实例对象*/}
//             这是Moive组件---{this.props.name}---{this.props.age}---{this.props.gender}
//         </div>
//     }
// }