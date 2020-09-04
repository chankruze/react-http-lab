/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 04 2020 06:20:41 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ""
        }
    }

    // executed when component renders and mounds for the first time
    // executed once in a lifecycle
    componentDidMount() {
        const API_END_POINT_POSTS = "https://my-json-server.typicode.com/chankruze/Test-JSON-DB/posts"
        // const config = {
        // method: 'get'
        //     url: API_END_POINT_POSTS
        // }
        // axios(config).then().catch()
        axios.get(API_END_POINT_POSTS)
            .then(res => {
                console.log(`GET STATUS: ${res.status}`)
                this.setState({ posts: res.data })
            })
            .catch(err => {
                console.error(err)
                this.setState({ errorMsg: `${err}` })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of posts
                <ol>
                    {
                        posts.length ?
                            posts.map(post => <li key={post.id}>{post.title}</li>) :
                            null
                    }
                    {errorMsg ? <p>{errorMsg}</p> : null}
                </ol>
            </div>
        )
    }
}

export default PostList
