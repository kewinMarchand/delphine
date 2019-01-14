import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {RichText} from 'prismic-reactjs'
import SrhLink from '../components/SrhLink'
import Loader from '../components/Loader'
import {withStyles, Card, CardContent, CardHeader, CardMedia, Typography} from '@material-ui/core/'

const styles = theme => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  media: {
    paddingTop: '62.25%',
    width: '100%',
  },
  content: {
    maxHeight: 500,
    overflow: 'hidden',
  },
  text: {
    marginBottom: theme.spacing.unit * 2,
    textOverflow: 'ellipsis',
  }
})

class ArticlePreview extends Component {
  render() {
    const {classes, doc} = this.props
    const {data} = doc
    if (doc) {
      console.log(doc)
      return (
        <Card elevation={4}>
          <CardMedia
            image={data.image_d_illustration.url}
            className={classes.media}
          />
          <CardHeader
            title={RichText.asText(data.titre)}
            />
          <CardContent className={classes.content}>
            <Typography className={classes.text}>
              {RichText
                .asText(data.texte_principal_de_l_article)
                .substring(0, 200) + " (...)"}
            </Typography>
            <SrhLink 
                to={'/articles/' + doc.uid} 
                text="Lire l&#39;article >>" 
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
};

export default withStyles(styles)(ArticlePreview);
