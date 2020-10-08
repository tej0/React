import React, { Component } from 'react'

class EventBinding extends Component {
    constructor() {
        super()
        this.state = {
            message: 'go "we can"'
        }
        /*binding the event in constructor */
        // this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:'yes"we can"'
    //     })
    //     console.log(this)

    // }

    clickHandler = () => {
        this.setState({
            message:'yes'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* binding in the render method */}
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                {/* arrow function in the render Method */}
                {/* <button onClick={()=>this.clickHandler()}>click</button> */}
                {/* binding the eventhander in the constructor */}
                {/* <button onClick={this.clickHandler}>click</button> */}

                {/* Arrow function as a class Property */}
                <button onClick={this.clickHandler.bind(this)}>click</button>

            </div>
        )
    }
}
export default EventBinding