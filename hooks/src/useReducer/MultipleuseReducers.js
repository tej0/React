import React, { useReducer } from 'react'

const initalState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return(state+1)
        case 'reset':
            return(initalState)
        case 'decrement':
            return(state-1)
        default:
            return state
    }
}
function MultipleuseReducers(){
   const [count,dispatch]= useReducer(reducer,initalState)
   const [countTwo,dispatchTwo]=useReducer(reducer,initalState)
    return(
        <>
        <div>
            Count -{count}
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')} >Re-set</button>
            <button onClick={()=>dispatch('increment')}>Increment</button>
        </div>
          <div>
          Count -{countTwo}
          <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
          <button onClick={()=>dispatchTwo('reset')} >Re-set</button>
          <button onClick={()=>dispatchTwo('increment')}>Increment</button>
      </div>
      </>
    )
}
export default MultipleuseReducers