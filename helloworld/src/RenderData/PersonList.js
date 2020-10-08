import React, { Component } from 'react'


class PersonList extends Component {

        render() {
            const person =this.props

            return (
                <div>
                 <h2>I am {person.name} .I am {person.age} years old. I know {person.skill} </h2>
                </div>
            )
        }

}
export default PersonList