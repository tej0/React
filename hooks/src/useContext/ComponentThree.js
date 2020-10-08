import React from 'react'
import { channelContext, userContext } from '../App'
function ComponentThree() {
    return (
        <userContext.Consumer>
            {
                user => {

                    console.log( 'inuserContext' + user);
                    // console.log( 'inuserContext' + channel);
                    {/* if we use inner consumer in outer one we get an error 'Filed to compile' */}

                    
                    return (
                        <channelContext.Consumer>
                            {Channel => {
                                console.log('channel context '+ user)
                                console.log('channel context '+ Channel)
                                return(
                                <div>
                                    user context value is {user},Channel context  value is{Channel}
                                </div>
                                )
                            }
                            }
                        </channelContext.Consumer>
                        // <div>user context value is {user}</div>
                    )
                }
            }
        </userContext.Consumer>


    )
}
export default ComponentThree