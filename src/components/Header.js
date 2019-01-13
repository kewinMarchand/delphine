import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderCtas from './HeaderCtas'
import {withStyles, Grid, Typography} from '@material-ui/core/'
import wave from '../assets/wave.svg'

const styles = theme => ({
  header: {
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    marginBottom: theme.spacing.unit * 5,
  },
  overlay: {
    background: theme.palette.background.overlay,
    backgroundPosition: 'center 100.5%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 12%',
    height: "100%",
  },
  headerContent: {
    height: 'fit-content',
  },
  titles: {
    color: '#FFF',
    marginBottom: theme.spacing.unit * 5,
  }
})

class Header extends Component {
  render() {
    const {classes, doc} = this.props
    return (
      <Grid 
        container 
        className={classes.header}
        style={{backgroundImage: 'url( ' + doc.image_principale.url + ')'}}
      >
        <Grid 
          container
          alignItems="center" 
          className={classes.overlay}
          style={{backgroundImage: 'url( ' + wave + ')'}}
        >
          <Grid container className={classes.headerContent}>
            <Grid item xs={12} className={classes.titles}>
              <Typography 
                variant="h1"
                align="center" 
                color="inherit"
                className={classes.typography}
                gutterBottom
              >
                {doc.titre[0].text}
              </Typography>
              <Typography 
                variant="h3"
                align="center" 
                color="inherit"
                className={classes.typography}
              >
                {doc.sous_titre[0].text}
              </Typography>
            </Grid>
            <HeaderCtas doc={doc}/>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Header.propTypes = {
  doc: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header)
