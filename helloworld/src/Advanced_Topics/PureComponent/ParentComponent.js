import React, {Component,PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent'
import MemoForFunctionComponent from './MemoForFunctionComponents'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'teja'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "teja"
            })
        }, 2000)
    }
    render() {
        console.log('************ParentComponent***************')
        return (
            <div>
                ParentComponent
                <MemoForFunctionComponent name={this.state.name}></MemoForFunctionComponent>
                {/* <RegularComponent name={this.state.name} ></RegularComponent>
                <PureComp name={this.state.name} ></PureComp> */}
            </div>
        )
    }
}
export default ParentComponent