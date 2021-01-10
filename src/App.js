import React from 'react';
import './App.css';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import DefaultPacks from './components/DefaultPacks/DefaultPacks';
import CustomPacks from './components/CustomPacks/CustomPacks';
import BuildNewPack from './components/BuildNewPack/BuildNewPack';
import Menu from './containers/Menu';


function App() {
  return (
    
    <div className="App" >
          <Router> 
           <h1 style={{paddingTop:"25px"}}> MEMORY GAME</h1>
           <LINK to="/">MENU</LINK>
              <Switch>
              <Route exact path='/'><Menu/></Route>
              <Route exact path='/defaultPacks'><DefaultPacks/></Route>
              <Route exact path='/customPacks'><CustomPacks/></Route>
              <Route exact path='/buildNewPack'><BuildNewPack/></Route>
              </Switch>
            </Router>
    </div>
  );
}

export default App;

const LINK = styled(Link)`text-decoration: none; color: black; font-size: 25px;`
