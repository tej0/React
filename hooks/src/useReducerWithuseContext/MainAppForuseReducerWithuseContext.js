import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const CountContext = React.createContext()

const initalState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return (state + 1)
        case 'reset':
            return (initalState)
        case 'decrement':
            return (state - 1)
        default:
            return state
    }
}
function MainAppForuseReducerWithuseContext() {
    const [count, dispatch] = useReducer(reducer, initalState)
    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <div>
                Count-{count}
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
    )
}
export default MainAppForuseReducerWithuseContext