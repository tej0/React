import React, { Component } from 'react'
import withCount from './WithCount'

class ClickCount extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         count: 0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }

    render() {
        // const { count } = this.state
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount} >Button {count} click</button>
            </div>
        )
    }
}
export default withCount(ClickCount)