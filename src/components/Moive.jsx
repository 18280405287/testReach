//class 抽离组件

import React from 'react'


export default class Moive extends React.Component{
    constructor(){
        //由于 Moive 组件, 继承了React.Component 这个父类,所以自定义的这个构造器中,必须调用super
      super();
        //只有调用了super() 以后,才能使用 this 关键字
        this.state ={
          msg:"大家好,我是class 创建的Movie组件"
        } //这个this.state={}  相当于 Vue中 data(){return{}}
    }

    render() {
        //访问知己的数据 通过this.state.xxx访问
        //在class 创建的组件中,this.state 中的数据都是可读可写的
        // this.state.msg="饿啊安抚水电费阿萨德";//this.state 被修改了

        return <div>
            这是Moive组件-----{this.props.name}---{this.props.age}---{this.props.gender}
            <h3>{this.state.msg}</h3>
        </div>
    }
}

//注意: 使用class关键字创建的组件,有自己的私有数据和生命周期函数
//注意: 使用 function 创建的组件,只有props,没有自己的生命周期函数
    //1 用构造函数创建的组件:叫做"无状态组件"-------(今后用的不多)
    //2 用 class 关键字创建的组件:叫做"有状态组件"
    //3 本质区别" 就是有没有 state 属性和有没有生命周期函数"

//什么时候用无状态组件?什么时候用有状态组件?
    //不需要自己的私有数据时,推荐-->无状态组件
    //需要有自己的私有数据时,推荐-->有状态组件
    //react 官方说: 无状态组件由于没有自己的state 和 生命周期函数,所以运行效率会比有状态组件效率高些

//组件中的 props 和 state 之间的区别
    //props中的数据都是外界传过来的
    //state和vued的data中的数据,都是组件私有的;(一般都是通过ajax获取回来的数据,一般都是私有数据)
    //props中的数据都是只读的,不能修改 重新赋值
    //state 或者 data 中的数据 都是可读可写的