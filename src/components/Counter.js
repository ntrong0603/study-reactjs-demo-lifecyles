import React, { Component } from 'react';

//lifecycles la nhung method duoc goi trong qua trinh app hoat dong

class Counter extends Component{
    constructor(props){
        console.log("Counter constructor");
        super(props);
        this.state = {
            count: 0
        }
    }

    increase(){
        this.setState({
            count: this.state.count+1
        });
    }
    decrease(){
        this.setState({
            count: this.state.count-1
        })
    }
    // mount: gan
    // unmount: bo ra
    render(){
        console.log("Counter render");
        return(
            <div className = "counter">
                <button onClick = {() => this.decrease()}>-</button>
                <span> {this.state.count} </span>
                <button onClick = {() => this.increase()}>+</button>
            </div>
        );
    }

    // duoc goi mot lan khi component duoc khoi tao va gan vao DOM
    // nen goi API trong nay
    componentDidMount() {
        console.log("Counter did mount");
    }
    // duoc goi ngay khi render duoc goi, khong goi o lan render dau tien
    // nen goi API trong nay
    componentDidUpdate(){
        console.log("Counter did update");
    }
    // goi truoc khi unmount
    // dung remove memory listener, event listener
    componentWillUnmount(){
        console.log("Counter will unmount");
    }
    // co the ghi de, mac dinh tra ve true, neu tra ve false component khong render lai
    // nhan vao 2 tham so
    // su dung toi uu app
    shouldComponentUpdate(nextProps, nextState){
        // state hien tai bang state tiep theo
        if(this.state.count === nextState.count){
            return false;
        }
        return true;
    }
}

export default Counter;