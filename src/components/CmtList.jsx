//class 抽离组件

import React from 'react'
import CmtItem from '@/components/CmtItem';

//使用 function 构造函数 定义无状态的组件


export default class CmtList extends React.Component {
    constructor() {
        super();
        this.state = {
            CommentList: [//评论列表组价数据
                {id: 1, user: '张三', content: '哈哈,爸爸来了'},
                {id: 2, user: '洒水', content: '哈哈,爸爸 大蛇来了'},
                {id: 3, user: '张sad三', content: '哈哈,sad爸爸来了'},
                {id: 4, user: '张安抚三', content: '哈哈,爸暗室逢灯爸来了'},
                {id: 6, user: '张是否三', content: '哈哈,奥数爸爸来了'}
            ]
        }
    }

    render() {
        return <div>
            <h1>这是评论列表组价</h1>
            {this.state.CommentList.map(item =><CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}
