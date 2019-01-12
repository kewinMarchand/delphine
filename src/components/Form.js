import React from 'react'
import {withStyles, Button, Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core/'

const styles = theme => ({
    card: {
        ...theme.mixins.gutters(),
        marginBottom: theme.spacing.unit * 12,
        marginTop: theme.spacing.unit * 6,
        paddingBottom: theme.spacing.unit * 4,
        paddingTop: theme.spacing.unit * 4,
    },
    cardActions: {
        padding: 0,
        paddingBottom: theme.spacing.unit * 6,
        paddingTop: theme.spacing.unit * 4,
    }
})


function Form(props) {
    return (
        <Grid container alignItems="center">
            <Grid item xs={12}>    
                <Card className={props.classes.card}>
                    <CardContent>
                        <form method="post"
                            className={props.classes.form} 
                            autoComplete="off"
                        >
                            <input type="hidden" name="form-name" value="contact"/>
                            {props.children}
                            <CardActions className={props.classes.cardActions} disableActionSpacing>
                                <Grid container justify="flex-end">
                                    <Button 
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        envoyer
                                    </Button>
                                </Grid>
                            </CardActions>
                        </form>
                        <Typography variant="caption" align="right">
                            * champ obligatoire
                        </Typography>  
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(Form);
