import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import Cta from '../components/Cta'
import withWidth, {isWidthUp} from '@material-ui/core/withWidth'
import {withStyles, Card, CardContent, CardMedia, Collapse, Grid, Typography} from '@material-ui/core/'

const styles = theme => ({
    cardContent: {
        ...theme.mixins.gutters(),
    },
    media: {
        backgroundSize: 'contain',
        height: theme.spacing.unit * 10,
        marginTop: theme.spacing.unit * 2,
        maxWidth: '80%',
        width: theme.spacing.unit * 10,
    },
})

class CollapseCardLayout extends Component {
  state = {
    collapsed: false
  }

  handleCollapse = () => {
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    const {classes, collapseContent, Media, title, text, width} = this.props
    const {collapsed} = this.state
    return (
      <Card elevation={10}>
        <CardContent className={classes.cardContent}>
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={12} md={2} align="center">
                <CardMedia
                    image={Media}
                    className={classes.media}
                />

            </Grid>
            <Grid item xs={12} md={10}>
              <Grid container direction="column" justify="space-between">
                <React.Fragment>
                  <Grid item xs={12}>
                    <Typography 
                      align={isWidthUp('md', width) ? "left" : "center"} 
                      variant="h4"
                      gutterBottom
                    >
                      {title}
                    </Typography> 
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom>
                      {text}
                    </Typography> 
                  </Grid>
                  <Collapse in={collapsed}>
                      <Typography>
                          {collapseContent}
                      </Typography>
                  </Collapse>
                </React.Fragment>
                <Cta 
                  primary={!collapsed && true}  
                  text={collapsed ? '^' : 'en savoir plus'}
                  onClick={this.handleCollapse} 
                  left={isWidthUp('md', width)}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

CollapseCardLayout.propTypes = {
  collapseContent: PropTypes.string.isRequired,
  Media: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
    withWidth(),
    withStyles(styles)
)(CollapseCardLayout)
