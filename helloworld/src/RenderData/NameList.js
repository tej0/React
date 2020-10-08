import React, { Component } from 'react';

import PersonList from './PersonList';
 
class NameList extends Component {
    constructor() {
        super()

    }
    render() {
        /*index the value */
        const names = ['div', 'sai', 'ram']
        const NameLiet = names.map((name,index) => <h2>{index} {name}</h2>)
        return (
            <div>
                {NameLiet}
            </div>
        )


        //     const persons = [
        //         {
        //             id: 1,
        //             name: 'div',
        //             age: 24,
        //             skill: 'vne'
        //         },
        //         {
        //             id: 2,
        //             name: 'sai',
        //             age: 24,
        //             skill: 'angular',
        //         },
        //         {
        //             id: 3,
        //             name: 'ram',
        //             age: 48,
        //             skill: 'java'
        //         }
        //     ]
        // const PersonsList = persons.map(person =>(
        //     <PersonList key={person.id} person ={person}  ></PersonList>
        // ))
        // // <h2>I am {person.name}.I am {person.age} years old. I know {person.skill}</h2>) )


 
        //     return (
        //         <div>
        //             {PersonsList}
        //         </div>
        //     )
    }
}
export default NameList;