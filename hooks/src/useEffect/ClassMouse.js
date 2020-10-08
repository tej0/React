import React, { Component } from 'react'

class ClassMouse extends Component {

    constructor() {
        super()
        this.state = {
            x: 0,
            y: 0
        }
    }
    logMousePosition = e => {
        console.log('Mouse Event')
        this.setState({ x: e.clientX, y: e.clientY })
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition )
    }
    // related to WillUnmount 
    componentWillUnmount(){
        console.log('class WillUnmount');
        window.removeEventListener('mousemove',this.logMousePosition)
    }
    render() {
        return (
            <div>
                X-{this.state.x} Y-{this.state.y}
            </div>
        )
    }
}
export default ClassMouse