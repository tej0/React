import React from 'react';

function MemoForFunctionComponent({name}){
    console.log('Rendering Memo Component')
    return(
        <div>
            {name}
        </div>
    )
}
{/* React.memo is an higher order component */}
export default React.memo(MemoForFunctionComponent)
