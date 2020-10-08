import React, { Component } from 'react'
import withCount from './WithCount'

class HoverCount extends Component {
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
        const { count, incrementCount } = this.props

        // const {count}=this.state
        return (
            <div>
                <h3 onMouseOver={incrementCount} >OnHoverCount {count}</h3>
            </div>
        )
    }
}
export default withCount(HoverCount)