import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import {RichText} from 'prismic-reactjs'
import SrhLink from '../components/SrhLink'
import Loader from '../components/Loader'
import {withStyles, Card, CardContent, CardHeader, CardMedia, Grid, Typography} from '@material-ui/core/'
import withWidth, {isWidthUp} from '@material-ui/core/withWidth'


const styles = theme => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  media: {
    paddingTop: '62.25%',
    width: '100%',
  },
  header: {
    alignItems: 'flex-start',
    minHeight: theme.spacing.unit * 13,
  },
  content: {
    maxHeight: theme.spacing.unit * 60,
    overflow: 'hidden',
  },
  contentText: {
    marginBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    textOverflow: 'ellipsis',
  }
})

class ArticlePreview extends Component {
  render() {
    const {classes, doc, i, width} = this.props
    if (doc) {
      console.log(doc)
      console.log(isWidthUp('sm', width))
      console.log(i)
      console.log(isWidthUp('sm', width) && i === 0)
      const options = 
        isWidthUp('lg', width) ? 
        {day: 'numeric', month: 'numeric', year: 'numeric'} :
        isWidthUp('md', width) && i === 0 ? 
        {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'} :
        isWidthUp('sm', width) ?
        {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'} :
        {day: 'numeric', month: 'numeric', year: 'numeric'}
      const date = new Date(doc.last_publication_date).toLocaleDateString('fr-FR', options)
      return (
        <Card elevation={4}>
          <CardMedia
            image={doc.data.image_d_illustration.url}
            className={classes.media}
          />
          <CardHeader
            title={RichText.asText(doc.data.titre)}
            className={classes.header}
            />
          <CardContent className={classes.content}>
            <Grid container justify="space-between" 
              wrap={isWidthUp('md', width) ? 'nowrap' : "wrap"}
            >
              <Typography className={classes.text}>
                Delphine witkowsky
              </Typography>
              <Typography className={classes.text}>
                {0 < doc.tags.length && doc.data.tags}
              </Typography>
              <Typography className={classes.text}>
                {date}
              </Typography>
            </Grid>
            <Typography className={classes.contentText}>
              {RichText
                .asText(doc.data.texte_principal_de_l_article)
                .substring(0, 150) + " (...)"}
            </Typography>
            <SrhLink 
                to={'/articles/' + doc.uid} 
                text="Lire l&#39;article&nbsp;&nbsp;&#8827;&#8827;" 
                primary
            />
          </CardContent>
        </Card>
      );
    }
    return <Loader/>;
  }
}

ArticlePreview.propTypes = {
    doc: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    width: PropTypes.string.isRequired,
};

export default compose(
  withWidth(),
  withStyles(styles)
)(ArticlePreview);
