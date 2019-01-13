import React from 'react'
import {withStyles, Button, Grid} from '@material-ui/core/'

const styles = theme => ({
  cta: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
  }
})

function Cta(props) {
    return (
        <Grid container justify={props.left ? "flex-start" : "center"} className={props.classes.cta}>
            <Button
                variant="contained"
                color={props.primary ? "primary" : "secondary"}
                onClick={props.onClick && props.onClick}
                href={props.href && props.href}
            >
                {props.text}
            </Button>
        </Grid>
    );
}

export default withStyles(styles)(Cta)
