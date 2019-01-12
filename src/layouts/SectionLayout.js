import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SectionTitle from '../components/SectionTitle'
import SectionSubtitle from '../components/SectionSubtitle'
import Cta from '../components/Cta'
import Banner from '../components/Banner'
import {withStyles, Grid} from '@material-ui/core/'

const styles = theme => ({
  section: {
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    height: "100%",
    paddingTop: theme.spacing.unit * 12,
  },
  overlay: {
    background: theme.palette.background.overlay,
    backgroundPosition: 'center 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 12%',
  },
  title: {
    marginBottom: theme.spacing.unit * 4,
  },
  contentContainer: {
    ...theme.mixins.gutters(),
    margin: 'auto',
    marginBottom: theme.spacing.unit * 4,
    maxWidth: 1280,
  }
})

class SectionLayout extends Component {
  render() {
    const {classes, id, bgImage, overlay, title, subtitle, white, children, noCta, ctaText, ctaHref, noBanner} = this.props
    return (
      <Grid 
        container 
        alignItems="center"
        component="section"
        className={classes.section}
        id={id}
        style={{backgroundImage: 'url( ' + bgImage + ')'}}
      >
        <Grid container
          className={`${classes.container} ${overlay ? classes.overlay : ''}`}
        >
          {title && <SectionTitle title={title} white={white}/>}
          {subtitle && <SectionSubtitle subtitle={subtitle} white={white}/>}
          <Grid container className={classes.contentContainer}>
            {children}
          </Grid>
          {!noCta && <Cta text={ctaText} href={ctaHref}/>}
          {!noBanner && <Banner/>}
        </Grid>
      </Grid>
    );
  }
}

SectionLayout.propTypes = {
  children: PropTypes.object.isRequired,
  id: PropTypes.string,
  bgImage: PropTypes.string,
  overlay: PropTypes.bool,
  title: PropTypes.string,
  noCta: PropTypes.bool,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  noBanner: PropTypes.bool,
  white: PropTypes.bool,
};

export default withStyles(styles)(SectionLayout);
