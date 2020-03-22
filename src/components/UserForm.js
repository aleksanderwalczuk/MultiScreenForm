import React, {Component} from "react";

export class UserForm extends Component{
    state = {
        //step defines stage of filling the form
        step: 1,
        //user data retrieved from form
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''

    }

    render() {
        return (
            <div>

            </div>
        )
    }

}