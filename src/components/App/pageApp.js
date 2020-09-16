import React, { Component } from 'react';
import Nav from '../Nav/pageNav'
import Bread from '../Bread/pageBread'
import Rice from '../Rice/pageRice'
import './pageApp.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      titles:[
        { id: 1, title: 'Bread' },
        { id: 2, title: 'Rice' },
        { id: 3, title: 'Noodle' },
        { id: 4, title: 'Fastfood' },
        { id: 5, title: 'Snacks' },
      ],
      breads: [
        { id: 1, img: '/uploads/donut.jpg' },
      ]
    }
  }

  render(){
  return (
    <div className="App" style={{width: '500%'}}>
      <div style={{ position: 'fixed', width: '100%',height: '6rem'}}><Nav data={this.state.titles}/></div>
      <Bread data={this.state.breads} id="Bread" />
      <Rice data={this.state.breads} id="Rice" />
      {/* <Noodle id="Noodle" />
      <Fastfood id="Fastfood" />
      <Snacks id="Snacks" /> */}
    </div>
  );
  }
}

export default App;
