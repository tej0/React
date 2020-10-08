import React, { Component } from 'react'

class DidMountCount extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            name: ''
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        //conditional run Effect
        if (prevState.count !== this.state.count) {
            console.log('updating document title')
        }

        document.title = `Clicked ${this.state.count} times`
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.nam}
                    onChange={e => {
                        this.setState({ name: e.target.value })
                    }}>
                </input>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    count {this.state.count} times
                </button>
            </div>
        )
    }
}
export default DidMountCount