import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>hello with jsx</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id:'hello',className:'dummyclass'},
        React.createElement('h1', null, 'hello without jsx')
    )

}
export default Hello;