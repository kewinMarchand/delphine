import React from 'react'
import SrhLink from '../components/SrhLink'
import Menu from './Menu'
import NavButton from './NavButton'
import logo from '../assets/logo_rh.png'
import {withStyles, AppBar, Button, Grid, Hidden, Toolbar, Typography} from '@material-ui/core/'

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
  grow: {
    flexGrow: 1,
  },
});

function Nav(props) {
    return (
      <AppBar
        position="fixed"
        color="inherit"
        className={props.classes.nav}
      >
          <Toolbar>
            <img src={logo}
               alt="srh competences"
               className={props.classes.media}
            />
            <SrhLink
              to="/"
              text={
                <Typography
                  variant="h6"
                  color="inherit"
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
            <NavButton/>
          </Toolbar>
      </AppBar>
    );
}

export default withStyles(styles)(Nav);
