import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class LevelThree extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (userName) => {
                        return (
                            <div>
                                hello {userName}
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
export default LevelThree