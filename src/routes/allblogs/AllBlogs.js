import React, { Component } from 'react';
import "./AllBlogs.css";
import axios from 'axios';

import Loader from "./../../components/loader/Loader";
import Navbar from "./../../components/navbar/Navbar";
import EachBlog from "./eachblog/EachBlog";



class AllBlogs extends Component {
    state = {
        blogs : null,
        loading : true
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
            data = data.sort(function(a, b){return a.date < b.date});;
            this.setState({blogs : data , loading : false});
            //console.log(data);
        })
    }
    render() {
        //console.log(this.props)
        var component = null;
        if(this.state.loading) {
            component = <Loader/>
        } else {
            component = (
                <div className="AllBlogs">
                    <p className="total-blogs">Total blogs : {this.state.blogs.length}</p>
                    {
                        this.state.blogs.map(blog => {
                            return ( <EachBlog 
                                key={blog.id} 
                                id={blog.id} 
                                date={blog.date} 
                                time={blog.time} 
                                day={blog.day} 
                                body={blog.body} 
                                love={blog.love}/>);
                        })
                    }
                </div>);
        }
        return (
            <div>
                <Navbar/>
                {component}
            </div>
        );
    }
}

export default AllBlogs;