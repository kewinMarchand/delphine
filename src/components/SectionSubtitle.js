import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withStyles, Grid, Typography} from '@material-ui/core/'

const styles = theme => ({
  subtitle: {
    marginBottom: theme.spacing.unit * 4,
  },
  whiteSubtitle: {
    color: theme.palette.primary.contrastText,
  }
})

class SectionSubtitle extends Component {
  render() {
    const {classes, subtitle, white} = this.props
    return (
      <Grid item xs={12} 
        className={`${classes.subtitle} ${white ? classes.whiteSubtitle : ''}`}
      >  
        <Typography 
          variant="subheading" 
          align="center"
          color="inherit"
        >
          {subtitle}
        </Typography>
      </Grid>
    );
  }
}

SectionSubtitle.propTypes = {
  subtitle: PropTypes.string,
  white: PropTypes.bool,
};

export default withStyles(styles)(SectionSubtitle);
