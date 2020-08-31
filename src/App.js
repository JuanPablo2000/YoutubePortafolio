import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Router>
      <Header></Header>
        <Switch>
          <Route path="/search">
          <div className="app__page">
          <Sidebar/>        
           <SearchPage/>
            </div>
          </Route>
          <Route path="/">
          
            <div className="app__page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>




    </div>
  );
}

export default App;
