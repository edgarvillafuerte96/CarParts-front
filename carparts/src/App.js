import React, {Component} from 'react';
import './App.css';


import NavBar from './component/NavBar';
import PartList from './component/PartList';

class App extends Component {
  render(){
    return (
    <div >
      <NavBar/>
      <PartList/>
    </div>
    );
  }
}

export default App;
