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
    backgroundPosition: 'center top',
    backgroundSize: 'contain',
    height: theme.spacing.unit * 14,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
})

function PrestationsPreview(props) {
  const {classes, doc} = props
  const {data} = doc
  if (doc) {
    return (
      <CollapseCard
        Media={
          <CardMedia
            image={data.icone_de_la_prestation.url}
            className={classes.media}
          />
        }
        title={RichText.asText(data.titre_de_la_prestation)}
        text={RichText.asText(data.texte_d_accroche_de_la_prestation)}
        collapseContent={
          <Typography>
            {RichText.asText(data.texte_cache_de_la_prestation)}
          </Typography> 
        }
      >
      </CollapseCard>
    );
  }
  return <Loader/>;
}

PrestationsPreview.propTypes = {
    doc: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrestationsPreview);
