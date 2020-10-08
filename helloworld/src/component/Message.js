import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            Message: 'welcome teja'
        }

    } 
    changeMessagge(){
        this.setState({
            Message: 'Thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMessagge()}>Subscribe</button>
            </div>
        )
    }
}
export default Message;