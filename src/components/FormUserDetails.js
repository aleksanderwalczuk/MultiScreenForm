import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title={'Hello form user details'} />
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <TextField
                            hintText={"Enter your first name"}
                            floatingLabelText={"First Name"}
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                        />
                        <TextField
                            hintText={"Enter your last name"}
                            floatingLabelText={"Last Name"}
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                        />
                        <TextField
                            hintText={"Enter your email name"}
                            floatingLabelText={"Email Name"}
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                        />
                        <RaisedButton
                            label={"Continue"}
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                            />
                    </div>
                </>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails