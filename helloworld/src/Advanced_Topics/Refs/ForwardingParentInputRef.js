import React, { Component } from 'react'
import ForwardingInputRejs from './ForwardingInputRefs'

class ForwardingParentInputRef extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef();
    }
    clickHandler = () => { this.inputRef.current.focus()}
    render() {
        return (
            <div>
                <ForwardingInputRejs ref={this.inputRef}></ForwardingInputRejs>
                <button onClick={this.clickHandler}>FocusInput</button>
            </div>
        )
    }
}
export default ForwardingParentInputRef