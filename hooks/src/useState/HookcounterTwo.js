import React, { useState } from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count:{count}
            <button onClick={() => setCount(prevCount => prevCount - 1)}>decrement</button>
            <button onClick={() => setCount(initialCount)}>reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>increment</button>
            <button onClick={incrementByFive}>increment by 5</button>
        </div>
    )
}
export default HookCounter