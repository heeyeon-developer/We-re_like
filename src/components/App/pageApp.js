import React, { Component } from 'react';
import Nav from '../Nav/pageNav'
import Bread from '../Bread/pageBread'
import Rice from '../Rice/pageRice'
import Noodle from '../Noodle/pageNoodle'
import Login from '../Login/pageLogin'
import Select from '../Select/pageSelect'
import './pageApp.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      titles:[
        { id: 1, title: 'Bread' },
        { id: 2, title: 'Rice' },
        { id: 3, title: 'Noodle' }
      ],
      breads: [
        { id: 1, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/01_bread.jpg', detail: '상세 설명', prices: '3000원'},
        { id: 2, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/02_bread.jpg', detail: '상세 설명', prices: '3000원'},
        { id: 3, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/03_bread.jpg', detail: '상세 설명', prices: '3000원'},
        { id: 4, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/04_bread.jpg', detail: '상세 설명', prices: '3000원'},
        { id: 5, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/05_bread.jpg', detail: '상세 설명', prices: '3000원'},
        { id: 6, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/06_bread.jpg', detail: '상세 설명', prices: '3000원'},
        { id: 7, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/07_bread.jpg', detail: '상세 설명', prices: '3000원'},
        { id: 8, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/08_bread.jpg', detail: '상세 설명', prices: '3000원'},
        { id: 9, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/09_bread.jpg', detail: '상세 설명', prices: '3000원'},
        { id: 10, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/10_bread.jpg', detail: '상세 설명', prices: '3000원'}
      ],
      rice: [
        { id: 1, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/01_rice.jpg', detail: '상세 설명', prices: '3000원'},
        { id: 2, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/02_rice.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 3, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/03_rice.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 4, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/04_rice.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 5, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/05_rice.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 6, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/06_rice.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 7, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/07_rice.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 8, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/08_rice.jpg', detail: '상세 설명', prices: '3000원' },
      ],
      noodle: [
        { id: 1, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/01_noodle.webp', detail: '상세 설명', prices: '3000원' },
        { id: 2, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/02_noodle.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 3, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/03_noodle.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 4, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/04_noodle.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 5, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/05_noodle.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 6, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/06_noodle.jpg', detail: '상세 설명', prices: '3000원' },
        { id: 7, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/07_noodle.jpg', detail: '상세 설명', prices: '3000원' }
      ]
    }
  }

  render(){
  return (
    <div className="App" style={{width: '100vw',height: '100vh'}}>
      <div style={{ zIndex: '1',position: 'fixed', width: '100%',height: '8rem'}}>
        <Nav data={this.state.titles}/>
      </div>
      <Bread data={this.state.breads} id="Bread" />
      <Rice data={this.state.rice} id="Rice" />
      <Noodle data={this.state.noodle}id="Noodle" />  

      <Login id="Login"></Login>    
      <Select id="Select"></Select>    
    </div>
  );
  }
}

export default App;
