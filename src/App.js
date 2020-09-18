import React, { createContext, useState } from 'react';
import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TravelDetail from './componants/TravelDetail/TravelDetail';
import Login from './componants/Login/Login';
import Book from './componants/Book/Book';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/travel/:id">
            <Header />
            <TravelDetail />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <PrivateRoute path="/book">
            <Header />
            <Book />
          </PrivateRoute>
          <Route path="*">

          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
