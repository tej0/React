import React,{Component} from 'react'
import LevelTwo from './ComponentLevelTwo'

class LevelOne extends Component{
    render(){
        return(
            <div>
                <LevelTwo />
            </div>
        )
    }
}
export default LevelOne