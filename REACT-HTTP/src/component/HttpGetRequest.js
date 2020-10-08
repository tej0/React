import React, { Component } from 'react'
import axios from 'axios'

class HttpGetRequest extends Component {
    constructor() {
        super()

        this.state = {
            getdata: [],
            errorMsg: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({ getdata: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({errorMsg :'error retreiving data'})
            })
    }
    render() {
        const { getdata , errorMsg } = this.state
        return (
            <div>
                list of post
                {
                    getdata.length ?
                        getdata.map(getdata => <div key={getdata.id}> {getdata.title} </div>)
                        :
                        null
                }
                {
                    errorMsg ?<div>{errorMsg}</div> :null
                }
            </div>
        )
    }
}
export default HttpGetRequest