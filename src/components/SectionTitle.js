import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withStyles, Grid, Typography} from '@material-ui/core/'

const styles = theme => ({
  title: {
    marginBottom: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 4,
  },
  whiteTitle: {
    color: theme.palette.primary.contrastText,
  }
})

class SectionTitle extends Component {
  render() {
    const {classes, title, white} = this.props
    return (
      <Grid item xs={12} 
        className={`${classes.title} ${white ? classes.whiteTitle : ''}`}
      >  
        <Typography 
          variant="h2"
          align="center"
          color="inherit"
        >
          {title}
        </Typography>
      </Grid>
    );
  }
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  white: PropTypes.bool,
};

export default withStyles(styles)(SectionTitle);
