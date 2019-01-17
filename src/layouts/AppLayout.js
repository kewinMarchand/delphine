import React  from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from '../store/configureStore'

import {MuiThemeProvider, CssBaseline, Grid} from '@material-ui/core/'
import theme from '../styles/Theme'

import Nav from '../navigation/Nav'
import InnerNav from '../navigation/InnerNav'
import CookieConsent from '../components/CookieConsent'
import Footer from '../sections/Footer'

function AppLayout(props) {
  console.log('AppLayout',props)
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}> 
          <Router onUpdate={() => window.scrollTo(0, 0)}>
            <React.Fragment>
              <CssBaseline />
              <Switch>
                <Route exact path="/">
                  <Nav/>
                </Route>
                <Route>
                  <InnerNav/> 
                </Route>
              </Switch>
              <Grid container id="top">
                {props.children}
              </Grid>
              <Footer/>
              <CookieConsent/>
            </React.Fragment>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
}

export default AppLayout
