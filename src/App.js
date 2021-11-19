import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Chat from './pages/chat';
import status from './pages/status';
import Extra from './pages/extra';
import Button from '@material-ui/core/Button';
import Friends from './pages/friends'; 



function App() {

  const mystyle = {
    color: "white",
    backgroundColor: "#ADD8E6",
    padding: "16px",
    fontFamily: "Arial",
    
  };

  return (
    <>
      
      <div align="right"><Button style={mystyle} > Login / Signup </Button></div>
      {/* <div><br/></div> */}

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/chat' component={Chat} />
          <Route path='/status' component={status} />
          <Route path='/extra' component={Extra} />
          <Route path='/friends' component={Friends} />
        </Switch>
      </Router></>
  );
}

export default App;

