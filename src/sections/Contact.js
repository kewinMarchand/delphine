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

class Contact extends React.Component {
    state = {
        name: undefined,
        email: undefined,
        function: undefined,
        phone: undefined,
        request: "Formation &amp; Conseil",
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
                            <form netlify name="contact" method="post"
                                className={classes.form} 
                                autoComplete="off"
                            >
                                <input type="hidden" name="form-name" value="contact"/>
                                <Grid container direction="column" justify="flex-end">
                                    <TextField
                                        required
                                        id="name"
                                        name="name"
                                        label="VOTRE NOM"
                                        type="text"
                                        className={classes.textField}
                                        value={this.state.name}
                                        onChange={this.handleChange('name')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        required
                                        id="email"
                                        name="email"
                                        label="VOTRE EMAIL"
                                        type="email"
                                        className={classes.textField}
                                        value={this.state.email}
                                        onChange={this.handleChange('email')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        required
                                        id="fonction"
                                        name="fonction"
                                        label="VOTRE FONCTION"
                                        type="text"
                                        className={classes.textField}
                                        value={this.state.function}
                                        onChange={this.handleChange('function')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        required
                                        id="telephone"
                                        name="telephone"
                                        label="VOTRE TÉLÉPHONE"
                                        type="tel"
                                        className={classes.textField}
                                        value={this.state.phone}
                                        onChange={this.handleChange('phone')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        required
                                        id="demande"
                                        name="demande"
                                        label="VOTRE DEMANDE"
                                        className={classes.textField}
                                        value={this.state.request}
                                        onChange={this.handleChange('request')}
                                        margin="normal"
                                        variant="outlined"
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
                                    </TextField>
                                    <TextField
                                        required
                                        id="message"
                                        name="message"
                                        label="VOTRE MESSAGE"
                                        type="text"
                                        className={classes.textField}
                                        value={this.state.message}
                                        onChange={this.handleChange('message')}
                                        margin="normal"
                                        variant="outlined"
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
