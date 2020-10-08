import React, { Component } from 'react'

class ChildMountingLifeCycleMethods extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'div'
        }
        console.log('ChildMountlifeCycleMethods  Constuctor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('ChildMountlifeCycleMethods getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('ChildMountlifeCycleMethods componentDidMount')
    }
    render() {
        console.log('ChildMountlifeCycleMethods render')
        return (
            <div>
                ChildMountlifeCycleMethods
            </div>
        )
    }
}
export default ChildMountingLifeCycleMethods