import React from 'react'
import Menu from './Menu'
import NavDrawer from './NavDrawer'
import {Grid, Hidden, IconButton} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'

class NavButton extends React.Component {
  state = {
    isDrawerOpen: false
  }

  toggleDrawer = () => {
    this.setState({isDrawerOpen: !this.state.isDrawerOpen})
  }

  render() {
    return (
        <Hidden mdUp>
          <Grid container justify="flex-end">
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer}
            >
              <MenuIcon/>
            </IconButton>
          </Grid>
            <NavDrawer
                open={this.state.isDrawerOpen}
                onClose={this.toggleDrawer}
                menu={Menu}
            />
        </Hidden>
    );
  }
}

export default NavButton
