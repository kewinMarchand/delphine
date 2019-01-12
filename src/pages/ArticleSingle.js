import React, { Component } from 'react'
import apiEndpoint from '../utils/apiEndpoint'
import Prismic from 'prismic-javascript'
import {RichText} from 'prismic-reactjs'
import Loader from '../components/Loader'
import {withStyles, Grid, Typography} from '@material-ui/core/'

const styles = () => ({
  header: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 400,
  },
  overlay: {
    backgroundColor: 'rgba(50,50,50,.5)',
    height: '100%',
  },
  typography: {
    color: '#fff',
  },
  media: {
    height: 'auto',
    maxWidth: '100%',
  }
})

class ArticleSingle extends Component {
  state = {
    docs: null,
  }
 	
  componentWillMount() { 
    const uid = this.props.match.params.uid

    Prismic.api(apiEndpoint)
      .then(api => {
        api.query(Prismic.Predicates.at('document.type', 'article')
      )
      .then(response => {
        if (response) {
          for (let i in response.results) {
            if (uid === response.results[i].uid) {
              return response.results[i]
            }
          }
        }
        return null
      })
      .then(article => 
        this.setState({ docs: article })
      );
    });
  }

  render() {
    const {classes} = this.props,
    {docs} = this.state,
    doc = docs && docs.data

    if (doc) {
      return (
        <Grid container alignItems="center">
          <Grid container alignItems="center">
            <Grid 
              container 
              alignItems="center"
              justify="center"
              component="header"
              className={classes.header}
              style={{
                backgroundImage: 'url(' + doc.image_d_illustration.url + ')'
              }}
            >
            <Grid 
              container 
              alignItems="center"
              justify="center" 
              className={classes.overlay}
            >
              <Typography 
                variant="display1" 
                className={classes.typography}
              >
                {RichText.asText(doc.titre)}
              </Typography>
            </Grid>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            {RichText.render(doc.texte_principal_de_l_article, this.linkResolver)}
            {undefined !== doc.image_d_illustration_secondaire.url &&
              <img 
                alt="illustration"  
                className={classes.media} 
                src={doc.image_d_illustration_secondaire.url} 
              />
            }
          </Grid>
        </Grid>
      );
    }
    return <Loader/>;
  }
}

export default withStyles(styles)(ArticleSingle);
