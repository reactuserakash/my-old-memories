import React, { Component } from 'react';
import "./Home.css";
import { NavLink } from "react-router-dom";
import axios from 'axios';

//external component
import Navbar from "./../../components/navbar/Navbar";
import Loader from "./../../components/loader/Loader";
import FullPost from "./fullpost/Fullpost";


class Home extends Component {
    state = {
        blogs : null,
        loading : true,
        fullpostFound : false,
        singlePostData : null
    }

    componentWillMount() {
        axios.get("https://my-old-memories.firebaseio.com/posts.json")
        .then(response => {
            var data = [];
            for(let key in response.data) {
                data.push({
                    ...response.data[key],
                    id : key
                });
            }
            this.setState({blogs : data , loading : false});
            //console.log(data);
        })
    }

    postSearchHandler = () => {
        var date = document.getElementById("search-date").value;
        var copyData = this.state.blogs;
        //console.log(date);
        var index = this.state.blogs.findIndex ( blog => {
            return blog.date === date;
        })
        var selectedPost = copyData[index];
        //console.log(selectedPost);
        if(index >= 0 ) {
            this.setState({fullpostFound : true, singlePostData : selectedPost});
            //console.log(index)
        }
    }

    postCloseHandler = () => {
        this.setState({fullpostFound : false})
    }

    render() {
        var component = null;
        if(this.state.loading) {
            component = <Loader/>
        } else if(this.state.loading === false && this.state.fullpostFound === false) {
            component = (
                <div>
                <Navbar/>
                <p className="header">''Memories''</p>
                <div className="search-section">
                    <input type="text" placeholder="Date ( Ex.2018-06-15 )" id="search-date"/>
                    <button className="search-button" onClick={this.postSearchHandler}>Search Blog</button>
                </div>
                <ul className="other-routs">
                    <li>
                        <NavLink to="/addblog" className="route-button add-blog">Add Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/allblogs" className="route-button all-blogs">All Blogs</NavLink>
                    </li>
                </ul>
                
                </div>
            )
        } else if (this.state.fullpostFound === true ) {
            component = (
                        <div>
                            <button className="post-close-btn" onClick={this.postCloseHandler}>Close</button>
                            <FullPost date={this.state.singlePostData.date} 
                            day={this.state.singlePostData.day} 
                            time={this.state.singlePostData.time} 
                            body={this.state.singlePostData.body} 
                            love={this.state.singlePostData.love}/>
                        </div>
                        );
        }
        return (
            <div className="Home">
                {component}
            </div>
        );
    }
}

export default Home;