import React,{Component} from 'react'

class ChildComponent extends Component{
    render(props){
        return(
            <div>
            <button onClick={()=>this.props.greetHandler('child')}>greet parent</button>
            </div>
        )
    }
}
export default ChildComponent