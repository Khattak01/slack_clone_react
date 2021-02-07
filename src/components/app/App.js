import React from 'react';
import './App.css';
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chat from '../chat/Chat'
import Login from '../login/Login'
import {useStateValue} from '../../contextAPI/StateProvider'

function App() {
  const [state,dispatch] = useStateValue()
  
  return (
    <div className="app">
      <Router>
        {!state.user ? (
          <Login />
        ) : (
        <React.Fragment>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1 className="heading__welcome">Welcome</h1>
              </Route>
            </Switch>
          </div>
        </React.Fragment>
          )}
      </Router>
    </div>
  );
}

export default App;
