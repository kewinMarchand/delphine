import React from 'react'
import FormContainer from '../components/FormContainer'
import {Grid, TextField} from '@material-ui/core/'

const SrhInput = (props) => {
    return (
        <TextField
            {...props}
            required
            id={props.name}
            label= {"VOTRE  " + (props.name).toUpperCase()}
            margin="normal"
            variant="outlined"
            style={{marginBottom: 16}}
        />          
    )
}

const options = [
    "Formation & Conseil",
    "Formation",
    "Conseil"
]

class Contact extends React.Component {
    state = {
        nom: undefined,
        email: undefined,
        fonction: undefined,
        telephone: undefined,
        demande: options[0],
        message: undefined,
    };
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    render() {
        const {nom, email, fonction, telephone, demande, message} = this.state
        return (
            <FormContainer>
                <Grid container direction="column" justify="flex-end">
                    <SrhInput
                        name="nom"
                        type="text"
                        value={nom}
                        onChange={this.handleChange("nom")}
                    />
                    <SrhInput
                        name="email"
                        type="email"      
                        value={email}
                        onChange={this.handleChange("email")}
                    />
                    <SrhInput
                        name="fonction"
                        type="text"
                        value={fonction}
                        onChange={this.handleChange("fonction")}
                    />
                    <SrhInput
                        name="telephone"
                        type="tel"
                        value={telephone}
                        onChange={this.handleChange("telephone")}
                    />
                    <SrhInput
                        name="demande"
                        value={demande}
                        onChange={this.handleChange("demande")}
                        select
                        SelectProps={{native: true}}
                    >
                        {options.map((option, i) => (
                                <option key={i} value={option}>{option}</option>
                        ))}
                    </SrhInput>
                    <SrhInput
                        name="message"
                        value={message}
                        onChange={this.handleChange("message")}
                        multiline
                        rows="6"
                    />
                </Grid>
            </FormContainer>
        );
    }
}

export default Contact
