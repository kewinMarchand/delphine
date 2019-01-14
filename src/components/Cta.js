import React from 'react'

import SrhLink from './SrhLink'
import {withStyles, Button, Grid} from '@material-ui/core/'

const styles = theme => ({
  cta: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
  }
})

function Cta(props) {

    const CtaButtom = (props) => {
        return (
            <Button
                variant="contained"
                color={props.primary ? "primary" : "secondary"}
                onClick={props.onClick && props.onClick}
            >
                {props.text}
            </Button>
        )
    }

    return (
        <Grid container 
            justify={props.left ? "flex-start" : "center"} 
            className={props.classes.cta}
        >
            {props.href ?
                <SrhLink 
                    anchor={!props.noAnchor}
                    to={props.href} 
                    text={
                        <CtaButtom
                            primary={props.primary} 
                            onClick={props.onClick}
                            text={props.text}
                        />
                    }
                />   
                :
                <CtaButtom 
                    primary={props.primary} 
                    onClick={props.onClick}
                    text={props.text}
                />
            }
        </Grid>
    );
}

export default withStyles(styles)(Cta)
