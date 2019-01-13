import React from 'react'
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
})

function Footer(props) {
    return (
        <Grid 
            container 
            component="footer"
            alignItems="center"
            className={props.classes.footer}
        >
            <Grid item xs={12}>
                <Typography align="center">
                    © {new Date().getFullYear()}&nbsp;
                    <SrhLink to="/"  text="SOCIAL RH COMPETENCES.&nbsp;"/>
                    <SrhLink to="/mentions_legales"  text="Mentions légales&nbsp;-" variant="caption"/>
                    <SrhLink to="/conditions_generales_utilisation"  text="&nbsp;C G U" variant="caption"/>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(Footer)
