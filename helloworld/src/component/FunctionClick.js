import React from 'react'

function FunctionClick(){
    function ClickHandler(){
        console.log('button click');
    }
return(
    <div>
        <button onClick={ClickHandler}>Clike</button>
    </div>
)
}

export default FunctionClick