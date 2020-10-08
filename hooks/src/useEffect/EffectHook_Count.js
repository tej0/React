import React, { useEffect, useState, } from 'react'

function EffectHook_Count() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        
        console.log('useEffect-onConditionl updating document title')
        document.title = `you Clicked ${count} times`/* conditional run effect */
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} ></input>
            <button onClick={() => setCount(count + 1)}>Click {count}</button>
        </div>
    )
}
export default EffectHook_Count