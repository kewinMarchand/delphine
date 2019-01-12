import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import Store from '../store/configureStore'

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
    const {classes} = this.props
      return (
        <Provider store={Store}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <React.Fragment>
                <Nav/>
                <Grid container className={classes.container}>
                  {this.props.children}
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
