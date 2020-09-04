/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 04 2020 06:48:36 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        const API_END_POINT_POSTS = "https://my-json-server.typicode.com/chankruze/Test-JSON-DB/posts"

        axios.post(API_END_POINT_POSTS, this.state)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>User Id</label>
                    <input type="number" name="userId" value={userId} onChange={this.changeHandler}></input>
                </div>
                <div>
                    <label>Post Title</label>
                    <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
                </div>
                <div>
                    <label>Post Body</label>
                    <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm
