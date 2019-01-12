import React from 'react'
import {withStyles, Button, Card, CardActions, CardContent, Grid, TextField, Typography} from '@material-ui/core/'

const styles = theme => ({
    card: {
        ...theme.mixins.gutters(),
        marginBottom: theme.spacing.unit * 12,
        marginTop: theme.spacing.unit * 6,
        paddingBottom: theme.spacing.unit * 4,
        paddingTop: theme.spacing.unit * 4,
    },
    textField: {
        marginBottom: theme.spacing.unit * 2,
    },
    menu: {
        width: 200,
    },
})

const SrhInput = (props) => {
    return (
        <TextField
            required
            id={props.name}
            margin="normal"
            variant="outlined"
            {...props}
        />          
    )
}

class Contact extends React.Component {
    state = {
        nom: undefined,
        email: undefined,
        function: undefined,
        telephone: undefined,
        demande: "Formation &amp; Conseil",
        message: undefined,
    };
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    

    render() {
        const {classes} = this.props
        return (
            <Grid container alignItems="center">
                <Grid item xs={12}>    
                    <Card className={classes.card}>
                        <CardContent>
                            <form method="post"
                                className={classes.form} 
                                autoComplete="off"
                            >
                                <input type="hidden" name="form-name" value="contact"/>
                                <Grid container direction="column" justify="flex-end">
                                    <SrhInput
                                        name="nom"
                                        label="VOTRE NOM"
                                        type="text"
                                        value={this.state.nom}
                                        onChange={this.handleChange('nom')}
                                    />
                                    <SrhInput
                                        name="email"
                                        label="VOTRE EMAIL"
                                        type="email"      
                                        value={this.state.email}
                                        onChange={this.handleChange('email')}
                                 
                                    />
                                    <SrhInput
                                        name="fonction"
                                        label="VOTRE FONCTION"
                                        type="text"
                                        value={this.state.function}
                                        onChange={this.handleChange('function')}
                                    />
                                    <SrhInput
                                        name="telephone"
                                        label="VOTRE TÉLÉPHONE"
                                        type="tel"
                                        value={this.state.phone}
                                        onChange={this.handleChange('telephone')}
                                    />
                                    <SrhInput
                                        name="demande"
                                        label="VOTRE DEMANDE"
                                        value={this.state.request}
                                        onChange={this.handleChange('demande')}
                                        select
                                        SelectProps={{
                                            native: true,
                                            MenuProps: {
                                              className: classes.menu,
                                            },
                                        }}
                                    >
                                        <option value="Formation &amp; Conseil">Formation &amp; Conseil</option >
                                        <option value="Formation">Formation</option >
                                        <option value="Conseil">Conseil</option >
                                    </SrhInput>
                                    <SrhInput
                                        name="message"
                                        label="VOTRE MESSAGE"
                                        value={this.state.message}
                                        onChange={this.handleChange('message')}
                                        multiline
                                        rows="6"
                                    />
                                </Grid>
                                <CardActions>
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
}

export default withStyles(styles)(Contact);
