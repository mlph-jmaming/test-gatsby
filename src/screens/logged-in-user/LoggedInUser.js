import React, { Component } from 'react';
import "./LoggedInUser.css";
import Tabs from "../../components/tabs/Tabs";
import Home from '../home/Home';
import UserProgress from "../logged-in-user-inprogress/UserProgress";
import UserCompleted from "../logged-in-user-completed/UserCompleted";


class LoggedInUser extends Component {
    render() {
        return (
            <Tabs>
                <div label="Home Page" >
                    <div className="content">
                        <Home onClickBuy={this.props.onClickBuy} />
                    </div>
                </div>
                <div label="Inprogress">
                    <div className="content">
                        <UserProgress onClickViewOrder={this.props.onClickViewOrder} user={this.props.user} />
                    </div>
                </div>
                <div label="Completed">
                    <div className="content">
                        <UserCompleted onClickViewOrder={this.props.onClickViewOrder} user={this.props.user} />
                    </div>
                </div>
            </Tabs>
        );
    }
}

export default LoggedInUser;
