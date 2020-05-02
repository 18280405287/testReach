import React, {Component} from 'react'

export default class BindEvent2 extends Component {
    constructor() {
        super();

        this.state = {
            msg:'哈哈'
        };
    };

    render() {
        return (
            <div>
                <button onClick={() => this.show(1,2,3)}>点击事件</button>

                {/*需求,点击按钮修改msg的值*/}
                  <h3>{this.state.msg}</h3>
            </div>
        )
    };

    show = (a,b,c) => {
        console.log(a+b+b)
    }

}


