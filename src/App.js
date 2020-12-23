import React from "react";
import logo from './logo.svg';
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path='/cindydhy' component={() => { 
    //  window.location.href = 'https://github.com/cindydhy'; 
        window.open('https://github.com/cindydhy', '_blank');
    //  return null;
      }}/> */}
      
    </Switch>
  </BrowserRouter>
  );
}

export default App;
