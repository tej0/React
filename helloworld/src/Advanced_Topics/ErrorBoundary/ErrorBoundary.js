import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    
    componentDidCatch(Error,info){
        console.log(Error);
        console.log(info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Some thing went wrong</h1>
        }
        console.log('what is this child' + this.props.children);

        return this.props.children
    }

}
export default ErrorBoundary