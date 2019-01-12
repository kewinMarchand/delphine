import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cta from './Cta'
import withWidth, {isWidthUp} from '@material-ui/core/withWidth'
import {Card, CardContent, Collapse, Grid, Typography} from '@material-ui/core/'

class CollapseCard extends Component {
  state = {
    collapsed: false
  }

  handleCollapse = () => {
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    const {collapseContent, Media, title, text, width} = this.props
    const {collapsed} = this.state
    return (
      <Card elevation={10}>
        <CardContent>
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={12} md={2} align="center">
              {Media}
            </Grid>
            <Grid item xs={12} md={10}>
              <Grid container direction="column" justify="space-between">
                <React.Fragment>
                  <Grid item xs={12}>
                    <Typography 
                      align={isWidthUp('md', width) ? "left" : "center"} 
                      variant="display1" 
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
                    {collapseContent}
                  </Collapse>
                </React.Fragment>
                <Cta 
                  primary={!collapsed && true}  
                  text={collapsed ? '^' : 'en savoir plus'}
                  onClick={this.handleCollapse} 
                  left
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

CollapseCard.propTypes = {
  collapseContent: PropTypes.object.isRequired,
  Media: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(CollapseCard)
