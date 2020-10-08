import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor() {
        super()
        this.ComponetRef = React.createRef()
    }
    clickHandler = () => { this.ComponetRef.current.focusInput() }
    render() {
        return (
            <div>
                <Input ref={this.ComponetRef}></Input>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}
export default FocusInput