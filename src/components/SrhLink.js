import React from 'react'
import {Link} from "react-router-dom"
import { withStyles} from '@material-ui/core/'

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
});

function SrhLink(props) {
  const { classes, to, text, primary } = props;
  return (
    <Link 
      to={to}  
      className={`${classes.link} ${primary ? classes.linkPrimary : ''}`}
    >
      {text}
    </Link>
  );
}

export default withStyles(styles)(SrhLink);
