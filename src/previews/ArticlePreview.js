import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {RichText} from 'prismic-reactjs'
import SrhLink from '../components/SrhLink'
import Loader from '../components/Loader'
import {withStyles, Card, CardContent, CardMedia, Typography} from '@material-ui/core/'

const styles = theme => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  media: {
    height: theme.spacing.unit * 25,
    [theme.breakpoints.up('sm')]: {
      height: theme.spacing.unit * 50,
    }
  },
})

class ArticlePreview extends Component {
  render() {
    const {classes, doc} = this.props
    const {data} = doc
    if (doc) {
      return (
        <Card elevation={4}>
          <CardMedia
            image={data.image_d_illustration.url}
            className={classes.media}
          />
          <CardContent>
            <Typography 
              variant="h4"
            >
              {RichText.asText(data.titre)}
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
