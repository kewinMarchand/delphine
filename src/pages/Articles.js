import React, { Component } from 'react'
import {connect} from 'react-redux'
import getAndStore from '../utils/getAndStore'

import SectionLayout from '../layouts/SectionLayout'
import ArticlesLoop from '../loops/ArticlesLoop'
import Loader from '../components/Loader'

class Articles extends Component {

  render() {
    const {storeNews} = this.props,
      {News} = storeNews,
      ready = 0 !== News.length
    if (ready) {
      return (
        <SectionLayout>
          <ArticlesLoop news={News}/>
        </SectionLayout>
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
