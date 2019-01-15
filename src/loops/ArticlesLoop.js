import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from '../previews/ArticlePreview'
import {Grid} from '@material-ui/core/'

class ArticlesLoop extends Component {

  render() {
    const news = this.props.news
    return (
      <Grid container spacing={40}>
        {news.map((doc, i) => 
          <Grid key={i} item xs={12} md={i === 0 ? 12 : 6} lg={4}>
            <ArticlePreview doc={doc} i={i}/>  
          </Grid>   
        )}
      </Grid>
    );
  }
}

ArticlesLoop.propTypes = {
  news: PropTypes.array,
};

export default ArticlesLoop;
