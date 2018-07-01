import React, { Component } from 'react';
import "./FullBlog.css";

//icons
import grayheart from "./../../img/heart.gray.svg";
import redheart from "./../../img/heart.red.svg";

class FullBlog extends Component {
    render() {
        //console.log(this.props.match.params)
        var heart = null;
        if(this.props.match.params.love === "True" || this.props.match.params.love === "true") {
            heart = <img src={redheart} alt="red-heart"/>
        } else {
            heart = <img src={grayheart} alt="gray-heart"/>
        }
        return (
            <div className="Post">
                <div className="post-liked">
                    { heart }
                </div>
                <div className="full-post">
                    <p className="post-date">{this.props.match.params.date}</p>
                    <p className="post-day">{this.props.match.params.day}</p>
                    <p className="post-time">{this.props.match.params.time}</p>
                    <p className="post-body">{this.props.match.params.body}</p>
                </div>
            </div>
        );
    }
}

export default FullBlog;