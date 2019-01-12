import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withWidth, {isWidthUp} from '@material-ui/core/withWidth'
import {Button, Grid} from '@material-ui/core/'

class HeaderCtas extends Component {
  render() {
    const {doc, width} = this.props
    return ( 
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={6} 
          align={isWidthUp('md', width) ? "right" : "center"}
        >
          <Button 
            variant="contained"
            color="primary"
            href="/#apropos"
            style={{margin: 8}}
          >
            {doc.bouton_entete_1[0].text}
          </Button>
        </Grid>
        <Grid item xs={12} md={6} 
          align={isWidthUp('md', width) ? "left" : "center"}
        >
          <Button 
            variant="contained"
            color="secondary"
            href="/#contact"
            style={{margin: 16}}
          >
            {doc.bouton_entete_2[0].text}
          </Button>
        </Grid>
      </Grid>
    );
  }
}

HeaderCtas.propTypes = {
  doc: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(HeaderCtas);
