import { Component } from "react";
import "./Login.css"
import { Constants } from "../../Constants";

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    onLoginClick = () => {

        // Admin
        if (this.state.email === 'admin' && this.state.password === 'admin') {
            Constants.saveToLocalStorage(Constants.LOGGED_IN_USER, this.state);
            this.props.setUserLoggedIn(this.state);
            this.props.handleClose();
            return;
        }

        //User 
        const users = Constants.getToLocalStorage(Constants.DATA_USER);
        const user = users.filter(account =>
            account.email === this.state.email && account.password === this.state.password
        ).map(item => item);
        if (user.length > 0) {
            this.props.setUserLoggedIn(user[0]);
            this.props.handleClose();
            alert('Welcome ' + user[0].firstName);
            Constants.saveToLocalStorage(Constants.LOGGED_IN_USER, user[0]);
            return;
        }
        alert('Email or password incorrect');
    }

    onInputChange = (type, value) => {
        const userState = { ...this.state };
        if (type === Constants.EMAIL) {
            userState.email = value;
        } else if (type === Constants.PASSWORD) {
            userState.password = value;
        }
        this.setState(userState);
    }

    render() {
        return (
            <div className="login-page-container">
                <p>Email/User name</p>
                <input type="email" onChange={(e) => this.onInputChange(Constants.EMAIL, e.target.value)}></input>

                <p className="text-style">Password</p>
                <input type="password" onChange={(e) => this.onInputChange(Constants.PASSWORD, e.target.value)}></input>
                <button onClick={this.onLoginClick} className="btn-login">Login</button>
            </div>
        );
    }
}

export default Login;