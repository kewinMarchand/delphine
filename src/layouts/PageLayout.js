import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import getAndStore from '../utils/getAndStore'

import Header from '../components/Header'
import Cta from '../components/Cta'
import Loader from '../components/Loader'

import {withStyles, Grid} from '@material-ui/core/'

const styles = theme => ({
  page: {
  },
})

class PageLayout extends Component {

  componentWillMount() {
    const {dispatch, storeDatas} = this.props
    console.log('storeDatas', storeDatas)
    if(undefined === storeDatas) {
      getAndStore(dispatch, 'page_daccueil', 100, 1, 'STORE_DATAS')
      console.log('storeDatas', storeDatas)
    }
  }

  render() {
    const {classes, bgImage, titre, soustitre, children, noCta, ctaText, ctaHref, noAnchor} = this.props
    const {Datas} = this.props.storeDatas,
      ready = 0 !== Datas.length

    if (ready) {
      const doc = Datas[0].data
      console.log('page doc', doc)
    
      return (
        <Grid container className={classes.page}>
          <Header 
            doc={doc} 
            titre={titre} 
            soustitre={soustitre} 
            bgImage={bgImage}
          />
          <Grid container>
            {children && children}
          </Grid>
          {!noCta && <Cta text={ctaText} href={ctaHref} noAnchor={noAnchor}/>}
        </Grid>
      );
    }
    return <Loader/>;
  }
}

PageLayout.propTypes = {
  children: PropTypes.array,
  bgImage: PropTypes.string,
  titre: PropTypes.string,
  soustitre: PropTypes.string,
  noCta: PropTypes.bool,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  noAnchor: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(PageLayout)
