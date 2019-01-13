import React from 'react'
import {Link} from "react-router-dom"
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
    }
});

function SrhLink(props) {
  const { classes, to, text, primary, variant} = props;
  return (
    <Link
      to={to}  
      className={`${classes.link} ${primary ? classes.linkPrimary : ''}`}
    >
      <Typography
          component="span"
          color="inherit"
          variant={variant ? variant : "body1"}
          className={classes.span}
      >
          {text}
      </Typography>
    </Link>
  );
}

export default withStyles(styles)(SrhLink);
