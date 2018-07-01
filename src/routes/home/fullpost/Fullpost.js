import React, { Component } from 'react';
import "./Fullpost.css";

import redheart from "./../../../img/heart.red.svg";
import grayheart from "./../../../img/heart.gray.svg";

class Fullpost extends Component {
    render() {
        //console.log(this.props.match.params)
        var heart = null;
        if(this.props.love === "true" || this.props.love === "True") {
            heart = <img src={redheart} alt="red-heart"/>
        } else {
            heart = <img src={grayheart} alt="gray-heart"/>
        }
        return (
            <div className="FullPost">
                <div className="post-liked">
                    { heart }
                </div>
                <div className="full-post">
                    <p className="post-date">{this.props.date}</p>
                    <p className="post-day">{this.props.day}</p>
                    <p className="post-time">{this.props.time}</p>
                    <p className="post-body">{this.props.body}</p>
                </div>
            </div>
        );
    }
}

export default Fullpost;