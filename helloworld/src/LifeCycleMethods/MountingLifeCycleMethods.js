import React, { Component } from 'react'
import ChildMountinglifecyclemethod from './ChildMountinglifecyclemethod'

class MountingLifeCycleMethods extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'div'
        }
        console.log('MountlifeCycleMethods  Constuctor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('MountlifeCycleMethods getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('MountlifeCycleMethod componentDidMount')
    }
    render() {
        console.log('MountlifeCycleMethods render')
        return (
            <div>
                lifeCycleMethods
            <ChildMountinglifecyclemethod></ChildMountinglifecyclemethod>
            </div>
        )
    }
}
export default MountingLifeCycleMethods