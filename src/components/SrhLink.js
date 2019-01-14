import React from 'react'

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
  span: {
    display: 'inline-block',
  },
  uppercase: {
    '&:first-letter': {
      textTransform: 'uppercase'
    }
  }
});

function SrhLink(props) {
  const { classes, to, text, primary, variant, anchor} = props;

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
        className={`${classes.link} ${primary ? classes.linkPrimary : ''}`}
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

export default withStyles(styles)(SrhLink);
