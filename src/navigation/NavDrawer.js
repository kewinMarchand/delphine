import React from 'react'
import PropTypes from 'prop-types'
import {withStyles, Button, Card, CardContent, CardMedia, Drawer, List, ListItem} from '@material-ui/core/'
import logo from '../assets/logo_rh.png'

const styles = theme => ({
  drawer: {
    backgroundColor: theme.palette.secondary.alpha,
  },
  media: {
    backgroundSize: 'contain',
    height: theme.spacing.unit * 12,
  },
  card: {
    backgroundColor: theme.palette.secondary.dark,
    height: '100%',
    color: theme.palette.secondary.contrastText,
    paddingTop: theme.spacing.unit * 4,
    width: theme.spacing.unit * 37,
  }
});

function NavDrawer(props) {
  return (
    <Drawer 
      anchor="right"
      open={props.open} 
      onClose={props.onClose}
      classes={{paper: props.classes.drawer}}
    >  
      <Card 
        tabIndex={0}
        role="button"
        onClick={props.onClose}
        onKeyDown={props.onClose}
        className={props.classes.card}
      >
        <CardMedia
          image={logo}
          className={props.classes.media}
        />
        <CardContent>
          <List>
            {props.menu.map((menu, i) => (
              <ListItem key={i}>
                <Button 
                    key={i} 
                    variant="text" 
                    href={menu.href}
                    size="small"
                    fullWidth
                    color="inherit"
                  >
                    {menu.text}
                  </Button>
              </ListItem>  
            ))}
          </List>
        </CardContent>
      </Card>
    </Drawer>
  );
}

NavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavDrawer);
