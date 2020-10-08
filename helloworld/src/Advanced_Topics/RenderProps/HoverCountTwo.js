import React, { Component } from 'react'

class HoverCountTwo extends Component {
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


        // const {count}=this.state
        const { count, incrementCount } = this.props
        return (
            <div>
                <h3 onMouseOver={incrementCount} >OnHoverCountTwon {count}</h3>
            </div>
        )
    }
}
export default HoverCountTwo