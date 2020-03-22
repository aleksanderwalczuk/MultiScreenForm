import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import {MuiThemeProvider} from "material-ui";

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title={'Hello form user details'}/>
                    <h1>Thank You For Your Submission</h1>
                </>
            </MuiThemeProvider>

        )
    }
}