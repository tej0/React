import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetch() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
    }, [])
    return (
        <div>
            {loading ? 'loading..' : post.title}
            {error ? error : null}
        </div>
    )
}
export default DataFetch