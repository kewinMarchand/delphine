import React, { Component } from 'react'
import {connect} from 'react-redux'
import getAndStore from '../utils/getAndStore'

import PageLayout from '../layouts/PageLayout'
import SectionLayout from '../layouts/SectionLayout'
import ArticlesLoop from '../loops/ArticlesLoop'
import Loader from '../components/Loader'

class Articles extends Component {

  componentWillMount() {
    getAndStore(this.props.dispatch, 'article', 10, 1, 'STORE_NEWS')
  }

  render() {
    const {storeNews} = this.props,
      {News} = storeNews,
      ready = 0 !== News.length
    if (ready) {
      return (
        <PageLayout 
          ctaText="Retour à l&#39;accueil"  
          ctaHref="/" 
          noAnchor 
          titre="Tous les articles"
          soustitre="SRH Compétences"
        >
          <SectionLayout noCta noBanner>
            <ArticlesLoop news={News}/>
          </SectionLayout>
        </PageLayout>
      );
    }
    return <Loader/>;
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)
