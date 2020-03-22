import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault()
        console.log(this.props.nextStep())
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title={'Enter User Details'} />
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <TextField
                            hintText={"Enter your occupation"}
                            floatingLabelText={"Occupation"}
                            onChange={handleChange('occupation')}
                            defaultValue={values.occupation}
                        />
                        <TextField
                            hintText={"Enter your city"}
                            floatingLabelText={"Your city"}
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                        />
                        <TextField
                            hintText={"Enter your Bio"}
                            floatingLabelText={"Your bio"}
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                        />
                        <div>
                            <RaisedButton
                                label={"Back"}
                                primary={false}
                                style={styles.button}
                                onClick={this.back}
                            />
                            <RaisedButton
                                label={"Continue"}
                                primary={true}
                                style={styles.button}
                                onClick={this.continue}
                            />
                        </div>
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

export default FormPersonalDetails