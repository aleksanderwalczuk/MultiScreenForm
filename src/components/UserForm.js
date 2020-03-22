import React, {Component} from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";

export class UserForm extends Component {
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

    //proceed to the next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    //go to the previous step
    prevStep = () => {
        const {step} = this.state;
        console.log(this.state.step)
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const {step} = this.state
        //following state values will be copied to values obj so they can be rendered in the inputs
        const {firstName, lastName, email, occupation, city, bio} = this.state
        const values = {firstName, lastName, email, occupation, city, bio}

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />)
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
            default:
                return <h1>Error</h1>
        }
    }

}