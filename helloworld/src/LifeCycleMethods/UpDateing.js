import React, { Component } from 'react'
import ChildUpDateing from './ChildUpDateing';

class UpDateing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'div'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('updateing lifecycleMethod getDerivedStateFromProps');
        return null
    }
    shouldComponentUpdate() {
        console.log('updateing lifecycleMethod shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('updateing lifeCycleMethod getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('updateing lifeCycleMethod componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'code'
        })
    }
    render() {
        console.log('updateing lifeCycleMethod render')
        return (
            <div>
                <div>updateing</div>
                <button onClick={this.changeState}>Change State</button>
                <ChildUpDateing></ChildUpDateing>
            </div>
        )
    }
}
export default UpDateing