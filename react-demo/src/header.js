import React from 'react';
import imghead from '../../../../shi/Downloads/04061fffb17f527365c1138a28384a3f.jpg';
class Header extends React.Component {
  render(){
    return (
      <div>
        我是头部
        <img src={imghead}/>
      </div>
    )
  }
}
export default Header;
