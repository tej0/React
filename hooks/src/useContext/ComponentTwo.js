import React, { useContext } from 'react'
import ComponentThree from './ComponentThree'
import {userContext,channelContext} from '../App'

function ComponentTwo() {
    const user=useContext(userContext)
    const channel=useContext(channelContext)
    return (
        <div>
            {user}-{channel}
            <ComponentThree />
        </div>
    )
}
export default ComponentTwo