import React, {Component} from 'react'


export default class BindEvent extends Component {
    constructor() {
        super();

        this.state = {};
    };

    render() {
        return (
            <div>
                BindEvent组件---

                {/*<button onClick={function () {}}>点击事件</button>*/}
                {/*<button onClick={this.myclickHandle}>点击事件</button>*/}

                {/*onClick 只接受 function*/}
                {/* 可以用箭头函数   this的指向,指向直接包裹者  */}
                {/*<button onClick={() => {}}>点击事件</button>*/}
                <button onClick={() => this.myclickHandle(9, 91)}>点击事件</button>

            </div>
        );
    }

    //这是实例方法
    myclickHandle =(a,b) => {
        console.log(a + b)
    }
};

// rcc +Tab
// import React, {Component} from 'react';
//
// class BindEvent extends Component {
//     render() {
//         return (
//             <div>
//
//             </div>
//         );
//     }
// }
//
// export default BindEvent;

