import React from 'react'
import {compose} from 'recompose'
import {withRouter} from 'react-router-dom'

import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {withStyles, Typography} from '@material-ui/core/'

const styles = theme => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'all .3s',
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  linkPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
    }
  },
  activeLink: {
      color: "green",
      textDeoration: 'underline',
  },
  span: {
    display: 'inline-block',
  },
  uppercase: {
    '&:first-letter': {
      textTransform: 'uppercase'
    }
  }
});

function NavigationLink(props) {
  const { classes, to, text, primary, variant, anchor, history} = props;
  console.log('NavigationLink',props)

  const LinkText = (props) => {
    return (
      <Typography
          component="span"
          color="inherit"
          variant={variant ? variant : "body1"}
          className={`${classes.span} ${classes.uppercase}`}
      >
          {text}
      </Typography>
    )
  }

  if(anchor) {
    return (
      <AnchorLink
        href={to}  
        className={`${classes.link} ${primary ? classes.linkPrimary : ''} ${history.location.hash === to ? classes.activeLink : ""}`}
      >
        <LinkText/>
      </AnchorLink>
    )
  } else {
    return (
      <Link
        to={to} 
        className={`${classes.link} ${primary ? classes.linkPrimary : ''}`}
      >
        <LinkText/>
      </Link>      
    );
  }
}

export default compose(
    withRouter,
    withStyles(styles)
)(NavigationLink)
