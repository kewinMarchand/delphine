import React, { Component } from 'react'
import {withStyles, Grid, Typography} from '@material-ui/core/'

const styles = () => ({
  oops: {

  }
})

class NotFound extends Component {
  render() {
    const {classes} = this.props
    return (
      <Grid container alignItems="center" className={classes.oops}>
        <Typography>404</Typography>
      </Grid>
    );
  }
}

export default withStyles(styles)(NotFound);
