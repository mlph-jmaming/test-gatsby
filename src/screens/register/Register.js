import { Component } from "react";
import "./Register.css";
import { Constants } from "../../Constants";
import { User } from "../../model/user";

class Register extends Component {

    state = {
        users: [],
        user: User
    }

    constructor() {
        super();
        // localStorage.removeItem(Constants.DATA_USER);
        this.state.users = Constants.getToLocalStorage(Constants.DATA_USER) === null ? []
            : Constants.getToLocalStorage(Constants.DATA_USER);
        this.state.user = new User();

    }


    onRegister = () => {
        if (this.state.user.firstName === ''
            || this.state.user.lastName === ''
            || this.state.user.address === ''
            || this.state.user.email === ''
            || this.state.user.password === '') {
            alert('Please complete the fields');
            return;
        }
        this.state.users.push(this.state.user);
        Constants.saveToLocalStorage(Constants.DATA_USER, this.state.users);
        this.props.handleClose();
    }

    onTextChange = (event, type) => {
        const userState = { ...this.state.user };
        if (userState.id === 0) {
            userState.id = this.state.users.length + 1;
        }
        switch (type) {
            case Constants.FIRST_NAME: {
                userState.firstName = event.target.value;
                break;
            }
            case Constants.LAST_NAME: {
                userState.lastName = event.target.value
                break;
            }
            case Constants.ADDRESS: {
                userState.address = event.target.value
                break;
            }
            case Constants.EMAIL: {
                userState.email = event.target.value
                break;
            }
            case Constants.PASSWORD: {
                userState.password = event.target.value
                break;
            }
            default: {
                break;
            }
        }
        this.setState({ user: userState });
    }

    render() {
        return (
            <div className="register-page-container">
                <p>First Name:</p>
                <input type="text" onChange={(event) => this.onTextChange(event, Constants.FIRST_NAME)}></input>

                <p className="title-style">Last Name:</p>
                <input type="text" onChange={(event) => this.onTextChange(event, Constants.LAST_NAME)}></input>

                <p className="title-style">Address:</p>
                <input type="text" onChange={(event) => this.onTextChange(event, Constants.ADDRESS)}></input>

                <p className="title-style">Email/User name:</p>
                <input type="text" onChange={(event) => this.onTextChange(event, Constants.EMAIL)}></input>

                <p className="title-style" >Password:</p>
                <input type="password" onChange={(event) => this.onTextChange(event, Constants.PASSWORD)}></input>
                <button className="btn-register" onClick={() => this.onRegister()}>Register</button>
            </div>
        );
    }
}

export default Register;
