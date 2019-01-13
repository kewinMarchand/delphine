import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import Articles from '../pages/Articles'
import ArticleSingle from '../pages/ArticleSingle'
import Mentions from '../pages/Mentions'
import Cgu from '../pages/Cgu'
import NotFound from '../pages/NotFound'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/articles" component={Articles}/>
      <Route path="/articles/:uid" component={ArticleSingle}/>
      <Route exact path="/mentions_legales" component={Mentions}/>
        <Route exact path="/conditions_generales_utilisation" component={Cgu}/>
      <Route component={NotFound}/>
    </Switch>
  );
}

export default Routes
