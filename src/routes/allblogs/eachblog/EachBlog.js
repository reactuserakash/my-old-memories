import React, { Component } from 'react';
import "./EachBlog.css";
import { NavLink } from "react-router-dom";

class EachBlog extends Component {
    render() {
        
        return (
            <NavLink to={"/asd/fgh/"+this.props.date+"/"+this.props.day+"/"+this.props.time+"/"+this.props.body+"/"+this.props.love} className="each-blog">
                <div className="each-blog-div">
                    <p>{this.props.date}</p>
                    <p>{this.props.day}</p>
                    <p>{this.props.time}</p>
                </div>
            </NavLink>
        );
    }
}

export default EachBlog;