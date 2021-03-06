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
    margin: 'auto',
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    maxWidth: '85%',
    [theme.breakpoints.up('lg')]: {
      ...theme.mixins.gutters(),
      maxWidth: 1200,
    }
  }
})

class SectionLayout extends Component {
  render() {
    const {classes, id, bgImage, overlay, title, subtitle, white, children, noCta, ctaText, ctaHref, noBanner, noAnchor} = this.props
    return (
      <Grid 
        container
        component="section"
        className={classes.section}
        id={id}
        style={{backgroundImage: 'url( ' + bgImage + ')'}}
      >
        <Grid container alignItems="flex-start"
          className={`${classes.container} ${overlay ? classes.overlay : ''}`}
        >
          {title && <SectionTitle title={title} white={white}/>}
          {subtitle && <SectionSubtitle subtitle={subtitle} white={white}/>}
          <Grid container className={classes.contentContainer}>
            {children}
          </Grid>
          {!noCta && <Cta text={ctaText} href={ctaHref} noAnchor={noAnchor}/>}
          {!noBanner && <Banner/>}
        </Grid>
      </Grid>
    );
  }
}

SectionLayout.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  bgImage: PropTypes.string,
  overlay: PropTypes.bool,
  title: PropTypes.string,
  noCta: PropTypes.bool,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  noBanner: PropTypes.bool,
  white: PropTypes.bool,
  noAnchor: PropTypes.bool,
};

export default withStyles(styles)(SectionLayout);
