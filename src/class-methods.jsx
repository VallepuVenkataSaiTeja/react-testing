import { Component } from "react";

class ClassMethods extends Component{
    state = {count: 0}

    increment = () =>{
        this.setState({count: this.state.count + 1})
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }
}