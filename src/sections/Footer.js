import React, { Component } from 'react'
import SrhLink from '../components/SrhLink'
import {withStyles, Grid, Typography} from '@material-ui/core/'

const styles = theme => ({
    footer: {
        boxShadow: '0px -5px 10px 0px rgba(0,84,164,0.18)',
        minWidth:'100vw',
        padding: theme.spacing.unit * 3,
        position: 'relative',
        zIndex: 100,
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.main,
        }
    },
})

class Footer extends Component {
  render() {
    const {classes} = this.props
    return (
        <Grid 
            container 
            component="footer"
            alignItems="center"
            className={classes.footer}
        >
            <Grid item xs={12}>
                <Typography align="center">
                    © {new Date().getFullYear()} SOCIAL RH COMPETENCES.&nbsp;
                    <SrhLink to="/mentions"  text="Mentions légales"/>
                </Typography>
            </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(Footer)
