import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import Articles from '../pages/Articles'
import ArticleSingle from '../pages/ArticleSingle'
import NotFound from '../pages/NotFound'

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/articles" component={Articles}/>
      <Route path="/articles/:uid" component={ArticleSingle}/>
      <Route component={NotFound}/>
    </Switch>
  );
}

export default Routes;
