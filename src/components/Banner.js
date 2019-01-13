import React, { Component } from 'react'
import {withStyles, Button, Grid, Typography} from '@material-ui/core/'

const styles = theme => ({
  bandeau: {
    ...theme.mixins.gutters(),
    background: theme.palette.primary.main,
    paddingBottom: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 12,
  },
  bandeauTextContainer: {
    height: 'fit-content',
    margin: 'auto',
    maxWidth: 1280,
  },
  bandeauText: {
    color: theme.palette.primary.contrastText,
    fontFamily: '"Playfair Display","Open Sans",sans-serif',
    lineHeight: '38px',
    paddingBottom: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  }
})

class Banner extends Component {
  render() {
    const {classes} = this.props
    return (
      <Grid container justify="center" alignItems="center" className={classes.bandeau}>
        <Grid item md={8} align="center" className={classes.bandeauTextContainer}>
          <Typography variant="subtitle1" className={classes.bandeauText}>
            Nous contacter pour connaître nos programmes et tarifs
          </Typography>
        </Grid>
        <Grid item md={4} align="center">
          <Button 
            variant="contained"
            color="secondary"
            href="/#contact"
          >
            contactez-nous
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Banner);
