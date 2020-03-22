import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import {List, ListItem} from "material-ui/List"
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {

    continue = e => {
        e.preventDefault()
        //PROCESS FORM DATA HERE
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const {values: {firstName, lastName, city, bio, email, occupation}} = this.props
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title={'Confirm Your Data'}/>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <List>
                            <ListItem
                                primaryText={"First Name"}
                                secondaryText={firstName}
                            />
                            <ListItem
                                primaryText={"Last Name"}
                                secondaryText={lastName}
                            />
                            <ListItem
                                primaryText={"Email"}
                                secondaryText={email}
                            />
                            <ListItem
                                primaryText={"Occupation"}
                                secondaryText={occupation}
                            />
                            <ListItem
                                primaryText={"City"}
                                secondaryText={city}
                            />
                            <ListItem
                                primaryText={"bio"}
                                secondaryText={bio}
                            />
                        </List>
                        <div>
                            <RaisedButton
                                label={"Back"}
                                primary={false}
                                style={styles.button}
                                onClick={this.back}
                            />
                            <RaisedButton
                                label={"Confirm"}
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

export default Confirm