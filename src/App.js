import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";

//external components
import Home from "./routes/home/Home";
import AddBlog from "./routes/addblog/AddBlog";
import AllBlogs from "./routes/allblogs/AllBlogs";
import FullBlog from "./components/FullBlog/FullBlog";
//<Route path="/" exact component={Home}/>
//<Route path="/addblog" exact component={AddBlog}/>
//<Route path="/allblogs" exact component={AllBlogs}/>

class App extends Component {
  state = {
    loading : true
  }

  render() {
    
    return (
      <div className="App">
          
          <Route path="/" exact component={Home}/>
          <Route path="/addblog" exact component={AddBlog}/>
          <Route path="/allblogs" exact component={AllBlogs}/>
          <Route path="/fullblog/date" exact component={FullBlog}/>
          <Route path="/asd/fgh/:date/:day/:time/:body/:love" component={FullBlog}/>
      </div>
    );
  }
}

export default App;
