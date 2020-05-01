import React from 'react'

//把评论 CmtItem 抽离成立一个无状态的项
//为什么要用 无状态创建组件?  因为--->react 官方说: 无状态组件由于没有自己的state 和 生命周期函数,所以运行效率会比有状态组件效率高些
export default function CmtItem(props) {
    return <div>
        <h1>评论人:{props.user}</h1>
        <p>评论内容:{props.content}</p>
    </div>
}