import React from 'react'
import PropTypes from 'prop-types'
import {RichText} from 'prismic-reactjs'
import CollapseCard from '../components/CollapseCard'
import Loader from '../components/Loader'
import {withStyles, CardMedia, Typography} from '@material-ui/core/'

const styles = theme => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  media: {
    backgroundSize: 'contain',
    height: theme.spacing.unit * 10,
    marginTop: theme.spacing.unit * 2,
    width: theme.spacing.unit * 10,
  },
})

function FormationsPreview(props) {
  const {classes, doc} = props
  const {data} = doc
  if (doc) {
    return (
      <CollapseCard
        Media={
          <CardMedia
            image={data.icone_de_la_formation.url}
            className={classes.media}
          />
        }
        title={RichText.asText(data.titre_de_la_formation)}
        text={RichText.asText(data.texte_d_accroche_de_la_formation)}
        collapseContent={
          <Typography>
            {RichText.asText(data.texte_cache_de_la_formation)}
          </Typography> 
        }
      >
      </CollapseCard>
    );
  }
  return <Loader/>;
}

FormationsPreview.propTypes = {
    doc: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormationsPreview);
