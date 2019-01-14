import React from 'react'
import {compose} from 'recompose'
import {connect} from 'react-redux'

import getAndStore from '../utils/getAndStore'
import {Link} from 'react-router-dom'
import SrhLink from '../components/SrhLink'
import Menu from './Menu'
import NavButton from './NavButton'
import {withStyles, AppBar, Grid, Hidden, Toolbar} from '@material-ui/core/'

const styles = theme => ({
  nav: {
  },
  media: {
    height: theme.spacing.unit * 10, 
    marginBottom: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
  },
});

class Nav extends React.Component {

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
        <AppBar
          position="fixed"
          color="inherit"
          className={this.props.classes.nav}
        >
            <Toolbar>
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

