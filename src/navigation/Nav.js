import React from 'react'
import {compose} from 'recompose'
import {connect} from 'react-redux'

import getAndStore from '../utils/getAndStore'
import {Link} from 'react-router-dom'
import SrhLink from '../components/SrhLink'
import Menu from './Menu'
import NavButton from './NavButton'
import {withStyles, AppBar, Grid, Hidden, Toolbar, Drawer} from '@material-ui/core/'

const styles = theme => ({
  media: {
    height: theme.spacing.unit * 10, 
    marginBottom: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
  },
});

class Nav extends React.Component {
  state = {
    oldScroll: 0,
    newScroll: 0,
    scrolled: false,
    visible: true,
  }

  updateScroll() {
    let scroll = window.scrollY;
    if (this.state.newScroll !== 0) {
        this.setState({oldScroll: this.state.newScroll})
    }
    this.setState({newScroll: scroll})
    if (scroll > 500) {
        if (this.state.newScroll <= this.state.oldScroll) {
            this.setState({visible: true})
        } else {
            this.setState({visible: false})
        }
    }
  }

  componentDidMount() {
      this.updateScroll()
      window.addEventListener('scroll', this.updateScroll.bind(this))
  }

  componentWillMount() {
    const {dispatch, storeDatas} = this.props
    if(0 === storeDatas.Datas.length) {
      getAndStore(dispatch, 'page_daccueil', 100, 1, 'STORE_DATAS')
    }
  }

  render() {
    const {Datas} = this.props.storeDatas
    if (0 !== Datas.length) {
      const titre = Datas[0].data.titre[0].text
      const logo = Datas[0].data.logo.url
      return (
        <Drawer anchor="top" 
          open={this.state.visible} 
          transitionDuration={500} 
          variant="persistent"
        > 
          <AppBar
            position="relative"
            color="inherit"
            className={this.props.classes.nav}
          >
              <Toolbar>
                <Grid container alignItems="center">
                <Link to="/">
                  <img src={logo}
                    alt="srh competences"
                    className={this.props.classes.media}
                  />
                </Link>
                <SrhLink
                  anchor
                  to="#top"
                  text={titre}
                  variant="h6"
                />
                </Grid>
                <Hidden smDown>
                  <Grid container justify="space-evenly">
                    {Menu.map((menu, i) => (
                      <SrhLink
                        key={i}
                        variant="body1"
                        to={menu.href}
                        text={menu.text}
                        anchor
                      />
                    ))}
                  </Grid>
                </Hidden>
                <NavButton/>
              </Toolbar>
          </AppBar>
        </Drawer> 
      );
    }
    return false
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default compose(
  connect(
  mapStateToProps,
  mapDispatchToProps
),
withStyles(styles)
)(Nav)

