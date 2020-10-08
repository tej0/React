import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true        }
    }
    render() {

        /* 
        if/else
        if(this.state.isLoggedIn){
            return(
                <div> Welcome div </div>
            )
        }
        else{
            return(
                <div>welcome Guest</div>
            )
        } 
        */


        /*Elementvarible in this approch we javaScript varibles to store element
        let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome div</div>
        }
        else {
            message = <div>Welcome guest</div>
        }
        return (
            <div>
                {message}
            </div>
        )
        */

        /* ternary conditional operator 
        return (
            this.state.isLoggedIn ? <div> Welcome div </div> : <div> Welcome Guest </div>
        )
        */

        /* shot circuit operator*/

        return(
            this.state.isLoggedIn &&<div>Welcome div</div>
        )
        // return (
        //     <div>
        //       <div> Welcome div </div> 
        //       <div> Welcome Guest </div>
        //     </div>
        // )
    }
}
export default UserGreeting