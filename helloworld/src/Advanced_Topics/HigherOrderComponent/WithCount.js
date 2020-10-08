import React from 'react'

const withCount = (WrappedComponent) => {
    class WithCount extends React.Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
            />
        }
    }
    return WithCount
}
export default withCount