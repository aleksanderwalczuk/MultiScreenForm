import React, {Component} from "react";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
    render() {
        return (<>
                <AppBar title={'Hello form user details'}/>
                <h1>Thank You For Your Submission</h1>
            </>
        )
    }
}