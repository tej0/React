import React, { useEffect, useState } from 'react'

function EffectHookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('EffectHookMouse move')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)
        
        //component WillUnmount

        return()=>{
            console.log('component unMountCode');
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <>
            Hooks X- {x} y- {y}
        </>
    )
}
export default EffectHookMouse