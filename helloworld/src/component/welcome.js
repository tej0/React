import React, { Component } from 'react'

class Welcome extends Component {
    render() {
       const props= this.props
        return(
        <h1>welcome{props.name}  a.k.a  {props.heroname}</h1>
        )
    }
}

export default Welcome