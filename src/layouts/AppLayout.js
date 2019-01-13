import React  from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from '../store/configureStore'

import {MuiThemeProvider, CssBaseline, Grid} from '@material-ui/core/'
import theme from '../styles/Theme'

import Nav from '../navigation/Nav'
import Footer from '../sections/Footer'


function AppLayout(props) {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <React.Fragment>
              <Nav/>
              <Grid container>
                {props.children}
              </Grid>
              <Footer/>
            </React.Fragment>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
}

export default AppLayout
