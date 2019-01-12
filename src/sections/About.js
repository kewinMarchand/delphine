import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withStyles, Card, CardContent, CardMedia, Grid, IconButton, Typography} from '@material-ui/core/'
import LinkIcon from '@material-ui/icons/Link'

const styles = theme => ({
  about: {
    marginBottom: theme.spacing.unit * 5,
  },
  title: {
    marginBottom: theme.spacing.unit * 3,
  },
  media: {
    borderRadius: '50%',
    height: theme.spacing.unit * 20,
    width: theme.spacing.unit * 20,
  },
  cardContent: {
    minHeight: theme.spacing.unit * 15,
  },
  icon: {
    display: 'block',
  },
  cta: {
    marginTop: theme.spacing.unit * 5,
  }
})

class About extends Component {
  render() {
    const {classes, doc} = this.props
    return (
      <Grid 
        container 
        alignItems="center"
        spacing={40}
        className={classes.about}
      >
        <Grid item xs={12} md={8}>
          <Typography variant="display3" align="center" className={classes.title}>
            {doc.titre_a_propos[0].text}
          </Typography>
          <Typography variant="body1" align="center">
            {doc.texte_a_propos[0].text}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} align="center" className={classes.card}>
          <Card raised>
            <CardMedia
              image={doc.image_carte__a_propos.url}
              className={classes.media}
            />
            <CardContent>
              <Grid container justify="center" alignItems="flex-end" className={classes.cardContent}>
                <IconButton 
                  variant="contained"
                  color="secondary"
                  href={doc.lien_linkedin.url}
                  className={classes.icon}
                >
                  <LinkIcon/>
                </IconButton>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

About.propTypes = {
  doc: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
