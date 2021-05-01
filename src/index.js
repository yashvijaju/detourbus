import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

import Home from './Home';
import FAQ from './FAQ';
import Team from './Team';
import Accessibility from './Accessibility';

ReactDOM.render((
  <React.StrictMode>
    <Router>
      <Switch>
          <Route exact path="/" render={() =>
              <Home/> 
          } /> 
          <Route exact path="/faq" render={() =>
              <FAQ/> 
          } /> 
          <Route exact path="/team" render={() =>
              <Team/> 
          } /> 
          <Route exact path="/accessibility" render={() =>
              <Accessibility/> 
          } /> 
          <Route path="/" render={() =>
              // 404 page
              <Home/> 
          } />
      </Switch>
    </Router>
  </React.StrictMode>),
  document.getElementById('root')
);
