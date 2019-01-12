import React from 'react'
import Form from '../components/Form'
import {Grid, TextField} from '@material-ui/core/'

const styles = theme => ({
    textField: {
        marginBottom: theme.spacing.unit * 2,
    },
})

class Contact extends React.Component {
    state = {
        nom: undefined,
        email: undefined,
        fonction: undefined,
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
        const {nom, email, fonction, telephone, demande, message} = this.state,
        SrhInput = (props) => {
            return (
                <TextField
                    required
                    id={props.name}
                    margin="normal"
                    variant="outlined"
                    {...props}
                    onChange={this.handleChange(props.name)}
                />          
            )
        }

        return (
            <Form>
                <Grid container direction="column" justify="flex-end">
                    <SrhInput
                        name="nom"
                        label="VOTRE NOM"
                        type="text"
                        value={nom}
                    />
                    <SrhInput
                        name="email"
                        label="VOTRE EMAIL"
                        type="email"      
                        value={email}
                    
                    />
                    <SrhInput
                        name="fonction"
                        label="VOTRE FONCTION"
                        type="text"
                        value={fonction}
                    />
                    <SrhInput
                        name="telephone"
                        label="VOTRE TÉLÉPHONE"
                        type="tel"
                        value={telephone}
                    />
                    <SrhInput
                        name="demande"
                        label="VOTRE DEMANDE"
                        value={demande}
                        select
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option value="Formation &amp; Conseil">Formation &amp; Conseil</option >
                        <option value="Formation">Formation</option >
                        <option value="Conseil">Conseil</option >
                    </SrhInput>
                    <SrhInput
                        name="message"
                        label="VOTRE MESSAGE"
                        value={message}
                        onChange={this.handleChange('message')}
                        multiline
                        rows="6"
                    />
                </Grid>
            </Form>
        );
    }
}

export default Contact
