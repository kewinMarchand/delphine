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
    const {classes, doc, cta, titre, soustitre, bgImage} = this.props
    console.log(bgImage)
    return (
      <Grid 
        container 
        className={classes.header}
        style={{backgroundImage: 'url( ' + (bgImage ? bgImage : doc.image_principale.url) + ')'}}
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
                {titre && titre}
              </Typography>
              <Typography 
                variant="h3"
                align="center" 
                color="inherit"
                className={classes.typography}
              >
                {soustitre && soustitre}
              </Typography>
            </Grid>
            {cta && <HeaderCtas doc={doc}/>}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Header.propTypes = {
  doc: PropTypes.object.isRequired,
  cta: PropTypes.bool,
  titre: PropTypes.string,
  soustitre: PropTypes.string,
  bgImage: PropTypes.string,
};

export default withStyles(styles)(Header)
