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
        { id: 1, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/01_bread.jpg', detail: '치아바타', prices: '3500원'},
        { id: 2, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/02_bread.jpg', detail: '바게트', prices: '2500원'},
        { id: 3, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/03_bread.jpg', detail: '블루베리 머핀', prices: '3000원'},
        { id: 4, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/04_bread.jpg', detail: '슈크림', prices: '1500원'},
        { id: 5, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/05_bread.jpg', detail: '레인보우 도넛', prices: '4000원'},
        { id: 6, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/06_bread.jpg', detail: '크로아상', prices: '2700원'},
        { id: 7, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/07_bread.jpg', detail: '팬케잌', prices: '5500원'},
        { id: 8, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/08_bread.jpg', detail: '프레첼', prices: '2500원'},
        { id: 9, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/09_bread.jpg', detail: '초코 브라우니', prices: '3300원'},
        { id: 10, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/breads/10_bread.jpg', detail: '허니 와플', prices: '2600원'}
      ],
      rice: [
        { id: 1, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/01_rice.jpg', detail: '아라비아따', prices: '6500원'},
        { id: 2, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/02_rice.jpg', detail: '김밥', prices: '3000원' },
        { id: 3, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/03_rice.jpg', detail: '초밥', prices: '25000원' },
        { id: 4, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/04_rice.jpg', detail: '참치 & 멸치 주먹밥', prices: '3500원' },
        { id: 5, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/05_rice.jpg', detail: '볶음밥', prices: '5500원' },
        { id: 6, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/06_rice.jpg', detail: '누룽지', prices: '4000원' },
        { id: 7, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/07_rice.jpg', detail: '해물리조또', prices: '7500원' },
        { id: 8, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/rice/08_rice.jpg', detail: '새우 볶음밥', prices: '7000원' },
      ],
      noodle: [
        { id: 1, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/01_noodle.jpg', detail: '라멘', prices: '7500원' },
        { id: 2, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/02_noodle.jpg', detail: '미트 파스타', prices: '8000원' },
        { id: 3, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/03_noodle.jpg', detail: '샐러드 파스타', prices: '9000원' },
        { id: 4, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/04_noodle.jpg', detail: '팟타이', prices: '8800원' },
        { id: 5, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/05_noodle.jpg', detail: '똠양꿍', prices: '12000원' },
        { id: 6, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/06_noodle.jpg', detail: '버섯 라면', prices: '4500원' },
        { id: 7, img: 'https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/noodle/07_noodle.jpg', detail: '냉면', prices: '5500원' }
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
