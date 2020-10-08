import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormDangKy from './Component/FormDangKy';
import PostMain from './Component/PostMain';
import PostNew from './Component/PostNew';


class App extends Component{
  render(){
    return(
      <div>
        <h1>SERIES : REACTJS : TỪ CƠ BẢN ĐẾN NÂNG CAO</h1>
        <PostMain />
        <FormDangKy />
        <PostNew />
      </div>
    );
  }
}

export default App;
