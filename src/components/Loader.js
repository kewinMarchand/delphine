import React, { Component } from 'react'
import {withStyles, Grid, Typography} from '@material-ui/core/'

const styles = () => ({
    loader: {
        minHeight: '100%',
    }
})

class Loader extends Component {
  render() {
    const {classes} = this.props
    return (
        <Grid container justify="center" alignItems="center" className={classes.loader}>
            <Typography>Loading...</Typography>
        </Grid>        
    );
  }
}

export default withStyles(styles)(Loader);
