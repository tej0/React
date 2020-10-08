import React,{Component} from 'react'
import LevelThree from './ComponentLevelThree'
import UserContext from './UserContext'

class LevelTwo extends Component{
    render(){
        return(
            <div>
                ComponentLevelTwo Context {this.context}
                <LevelThree />
            </div>
        )
    }
}
{/* ContextType Property on the class */}
LevelTwo.contextType = UserContext

export default LevelTwo