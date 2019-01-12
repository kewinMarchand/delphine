import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from '../store/configureStore'

import {MuiThemeProvider, CssBaseline, Grid, withStyles} from '@material-ui/core/'
import theme from '../styles/Theme'

import Nav from '../navigation/Nav'
import Footer from '../sections/Footer'

const styles = theme => ({
  container: {
    minHeight: '100vh',
  }
})

class AppLayout extends Component {
  render() {
    const {classes, children} = this.props
      return (
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <React.Fragment>
                <Nav/>
                <Grid container className={classes.container}>
                  {children}
                </Grid>
                <Footer/>
              </React.Fragment>
            </Router>
          </MuiThemeProvider>  
        </Provider>
      );
  }
}

export default withStyles(styles)(AppLayout);
