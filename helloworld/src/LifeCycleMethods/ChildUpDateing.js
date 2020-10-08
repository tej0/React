import React, { Component } from 'react'

class ChildUpDateing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'div'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('childupdateing lifecycleMethod getDerivedStateFromProps');
        return null
    }
    shouldComponentUpdate() {
        console.log('childupdateing lifecycleMethod shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('childupdateing lifeCycleMethod getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('childupdateing lifeCycleMethod componentDidUpdate')
    }
    render() {
        console.log('childupdateing lifeCycleMethod render')
        return (
            <div>
                ChildUpDateing
            </div>
        )
    }
}
export default ChildUpDateing