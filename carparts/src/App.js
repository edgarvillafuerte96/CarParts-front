import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';

import NavBar from './component/NavBar';
import PartList from './component/PartList';
import Cart from './component/Cart';
import Detail from './component/Detail';
import Default from './component/Default';


class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={PartList}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
