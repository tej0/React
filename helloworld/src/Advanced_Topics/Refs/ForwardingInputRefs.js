import React from 'react'

// function ForwardingInputRefs(){
//     return(
//         <div>
//             <input type ='text'/>
//         </div>
//     )
// }

const ForwardingInputRefs = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})
export default ForwardingInputRefs