import React, { useContext } from 'react'
import {CountContext} from './MainAppForuseReducerWithuseContext'
function ComponentD(){
    const countContext= useContext(CountContext)
    return(
        <div>
            ComponentD - {countContext.countState}
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')} >Re-set</button>
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        </div>
    )
}
export default ComponentD