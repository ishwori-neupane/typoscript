import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Switch } from "react-router-dom";
import AddTodo from './pages/AddTodo';
import Home from './pages/Home';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/add" component={AddTodo}/> */}
          {/* <Route exact path="/" component={Home} /> */}
           <Route exact path="/" component={Calculator}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
