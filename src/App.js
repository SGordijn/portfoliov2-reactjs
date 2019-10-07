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
import ProjectPage from "./pages/project";
import TeamPage from "./pages/team";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/project" component={ProjectPage}/>
        <Route exact path="/team" component={TeamPage}/>
        <Route exact path="/contact" component={ContactPage}/>
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
