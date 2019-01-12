import React from 'react'
import SrhLink from '../components/SrhLink'
import Menu from './Menu'
import NavDrawer from './NavDrawer'
import logo from '../assets/logo_rh.png'
import {withStyles, AppBar, Button, Grid, Hidden, IconButton, Toolbar, Typography} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  nav: {
    marginBottom: theme.spacing.unit * 6,
  },
  media: {
    height: theme.spacing.unit * 10, 
    marginBottom: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {

  },
});

class Nav extends React.Component {
  state = {
    isDrawerOpen: false
  }

  toggleDrawer = () => {
    this.setState({isDrawerOpen: !this.state.isDrawerOpen})
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar 
        position="fixed" 
        color="inherit"  
        className={classes.nav}
      >
          <Toolbar> 
            <img src={logo} alt="srh competences" className={classes.media} />
            <SrhLink 
              to="/" 
              text={
                <Typography 
                  variant="h6" 
                  color="inherit" 
                  className={classes.grow}
                >
                  SRH&nbsp;Compétences
                </Typography>}
            />
            <Hidden smDown>
              <Grid container justify="space-evenly">
                {Menu.map((menu, i) => (
                  <Button 
                    key={i} 
                    variant="text" 
                    href={menu.href}
                    size="small"
                  >
                    {menu.text}
                  </Button>
                ))}
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid container justify="flex-end">
                <IconButton 
                  className={classes.menuButton} 
                  color="inherit" 
                  aria-label="Menu"
                  onClick={this.toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <NavDrawer 
              open={this.state.isDrawerOpen} 
              onClose={this.toggleDrawer}
              menu={Menu}
            />
          </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Nav);
