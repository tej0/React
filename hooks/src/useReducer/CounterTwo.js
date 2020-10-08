import React, { useReducer } from 'react'

const initalState = {
    firstCounter: 0,
    secondCounter: 20
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment2':
            return ({...state, secondCounter: state.secondCounter + action.value })
        case 'increment':
            console.log('this reducer state' + state);
            return ({...state, firstCounter: state.firstCounter + action.value })
        case 'reset':
            return (initalState)
        case 'decrement':
            return ({...state, firstCounter: state.firstCounter - action.value })
        case 'decrement2':
            return ({...state, secondCounter: state.secondCounter - action.value })
        default:
            return state
    }
}
function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initalState)
    return (
        <>
            <div>
                FirstCounter -{count.firstCounter}
                <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement by 1</button>
                <button onClick={() => dispatch({ type: 'reset' })} >Re-set</button>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment by 1</button>
                <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>


                SecondCounter -{count.secondCounter}
                <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement by 5</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement by 1</button>
                <button onClick={() => dispatch({ type: 'reset' })} >Re-set</button>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment by 1</button>
                <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment by 5</button>

            </div>
        </>
    )
}
export default CounterTwo