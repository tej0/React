import React from 'react';
/*java script */
// function Greet(){
// return <h1> hello div</h1>
// }

/* ES6 */

// const Greet = (props) => {

//     return (
//         <div>
//             <h1>hello {props.name} {props.heroname} from function component</h1>
//             <p>{props.children}</p>
//         </div>
//     )

// }


/* destructuring props within function PARAMETER*/

// const Greet = ({name,heroname,children}) => {

//     return (
//         <div>
//             <h1>hello {name} {heroname} from function component</h1>
//             <p>{children}</p>
//         </div>
//     )

// }
/* destructuring props with function BODY*/

const Greet = (props) => {
    const {name,heroname,children} =props
    return (
        <div>
            <h1>hello {name} {heroname} from function component</h1>
            <p>{children}</p>
        </div>
    )

}

export default Greet; 