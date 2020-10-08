import React, { useState } from 'react'
import ClassMouse from './ClassMouse';

import EffectHookMouse from './EffectHookMouse';

function WillUnmountButton (){
    const [display,setDisplay ]=useState(true)
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>tap on this</button>
            {/* {display && < ClassMouse/>} */}
            {display && <EffectHookMouse />}
        </div>
    )
}
export default WillUnmountButton