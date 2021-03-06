import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import HomePage from "./pages";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import FriendsPage from "./pages/friends";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/projects" component={ProjectsPage}/>
        <Route exact path="/friends" component={FriendsPage}/>
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
