// 1. 导入包
// import React,{Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'


//使用 @ 的好处 :  解决了项目中的路径问题,将来抽离组件的时候,抽路径时不会乱,路劲没有问题
import Moive from '@/components/Moive'
import CmtList from '@/components/CmtList'

const user={
    name:"sadfa",
    age:34,
    gender:'男'
};

ReactDOM.render(<div>

{/*这里的Movie标签, 其实 就是 Movie 类的 实例对象*/}
{/*<Moive name={user.name} age={user.age} gender={user.gender }></Moive>*/}
{/*改造成 ES6 的 展开运算符 */}
    <Moive {...user}></Moive>

    <CmtList></CmtList>
</div>, document.getElementById('app'));

