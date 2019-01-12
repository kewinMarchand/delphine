import React, { Component } from 'react'
import {connect} from 'react-redux'
import getAndStore from '../utils/getAndStore'

import ArticlesLoop from '../loops/ArticlesLoop'
import Loader from '../components/Loader'

class Articles extends Component {

  componentWillMount() {
    getAndStore(this.props.dispatch, 'article', 12, 1, 'STORE_NEWS')
  }

  render() {
    const {storeNews} = this.props,
      {News} = storeNews,
      ready = 0 !== News.length
    if (ready) {
      return (
        <React.Fragment>
          <ArticlesLoop news={News}/>
        </React.Fragment> 
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
