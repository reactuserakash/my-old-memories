import React, { Component } from 'react';
import "./AddBlog.css";
import axios from "axios";

import Navbar from "./../../components/navbar/Navbar";

class AddBlog extends Component {

    addPost = () => {
        var post = {
            date : document.getElementById("date-value").value,
            day : document.getElementById("day-value").value,
            time: document.getElementById("time-value").value,
            love: document.getElementById("love-value").value,
            body : document.getElementById("body-value").value,
        }
        if(post.body !== "" && post.date !== "") {
            axios.post("https://my-old-memories.firebaseio.com/posts.json",post).then((response)=>{
                console.log("post is added");
            }).catch((error)=>{
                console.log("Cant add post");
            })
        }
        this.props.history.goBack();
    }

    render() {
        
        return (
            <div>
                <Navbar/>
                <div className="AddBlog">
                    <label>
                        <p>Date</p>
                        <input type="date" id="date-value" format="dd-mm-yyyy" />
                    </label>
                    <label>
                        <p>Day</p>
                        <input type="text" id="day-value" placeholder="Ex.Thursday" />
                    </label>
                    <label>
                        <p>Time</p>
                        <input type="text" id="time-value"  placeholder="Ex.08:30 PM"/>
                    </label>
                    <label>
                        <p>Body</p>
                        <textarea rows="9" cols="50" id="body-value"  placeholder="Your memorise of today...."/>
                    </label>
                    <label>
                        <p>Love</p>
                        <input type="text" id="love-value"  placeholder="True or False"/>
                    </label>
                    <button onClick={this.addPost} className="add-blog-btn">Add Blog</button>
                </div>
                
            </div>
        );
    }
}

export default AddBlog;