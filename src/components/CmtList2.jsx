import React,{Component} from 'react'

//导入 列表组件需要的 样式表
// import cssobj from '@/css/cmtlist.scss'
import cssobj from '@/css/cmtlist.scss'
//console.log(cssobj);// {}  空对象
//发现: css样式 有作用域冲突问题
//css 样式是全局的,整个项目都起作用
//vue 中解决样式冲突的办法是   <style scoped></style>
//react 中有没有这个指令呢?
//      答案:没有,因为,在React中,根本就没有指令概念


//导入 评论项 组件
import CmtItem from '@/components/CmtItem2';

//导入 bootstrap 样式表
//如果在引用某个包的时候,这个包被安装到 node-modules中 ,
// 可以省略 node-modules 这层目录,直接以包名引入自己的 模块 或 样式
//自己规定:  第三方模块 都是 以.css结尾的,  这样我们不要为 普通的 .css 启用模块化
            //自己的样式表 , 都要以 .scss 或 .less 结尾,只为.less和.scss结尾的模块化
import 'bootstrap/dist/css/bootstrap.css'

export default class CmtList2 extends Component {
    constructor(){
        super();
        this.state={
            CommentList: [//评论列表组价数据
                {id: 1, user: '张三', content: '哈哈,爸爸来了'},
                {id: 2, user: '洒水', content: '哈哈,爸爸 大蛇来了'},
                {id: 3, user: '张sad三', content: '哈哈,sad爸爸来了'},
                {id: 4, user: '张安抚三', content: '哈哈,爸暗室逢灯爸来了'},
                {id: 6, user: '张是否三', content: '哈哈,奥数爸爸来了'}
            ]
        };
    };

    render(){
        return (
        <div>
            {/*<h1 className={cssobj.title + ' test'}>这是评论列表组价</h1>*/}
            <h1 className={[cssobj.title,'test'].join(' ')}>这是评论列表组价</h1>

            {/*<button className={[bootcss.btn,bootcss["btn-primary"]].join(' ')}>按钮</button>*/}
            <button className="btn btn-primary">按钮</button>
            <div className="panel panel-primary"></div>

            {this.state.CommentList.map(item =><CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
        );
    }
};