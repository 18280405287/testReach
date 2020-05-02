import React from 'react'


//抽离的css样式,第一层封装,将样式对象和结构分离
// const itemStyle = {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'};
// const userStyle = {fontSize: '14px'};
// const contentStyle = {fontSize: '12px'};

//第二层封装,合并成一个大的样式对象
// const styles={
//     item: {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'},
//     user: {fontSize: '14px'},
//     conten:{fontSize: '12px'}
// };

//第三层  单独抽离到一个新的js文件中,然后引入
import styles from '@/components/styles'

//把评论 CmtItem 抽离成立一个无状态的项
//为什么要用 无状态创建组件?  因为--->react 官方说: 无状态组件由于没有自己的state 和 生命周期函数,所以运行效率会比有状态组件效率高些
export default function CmtItem(props) {
    return <div style={styles.item}>
        {/*如果想要写 行内样式,写成双花括号,style={{color:'red',margin:'10px'}}-------不能写字符串*/}
        <h1 style={styles.user}>评论人:{props.user}</h1>
        <p style={styles.content}>评论内容:{props.content}</p>
    </div>
}