import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    increment() {
        /* this type is use, when we are dealing with current state */

        // this.setState(
        // {
        //     count: this.state.count + 1
        // },
        //     () => {
        //         console.log('CallBack value',this.state.count)
        //     }
        // )

        /* when we are dealing with previes state ,use this approach */

        this.setState(prevState => ({
            count: prevState.count + 1
        })
        )
        console.log(this.state.count)
    }

    incrementFive()
     {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

    render() {
        return (
            <div>
                count -{this.state.count}
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )

    }
}
export default Counter;