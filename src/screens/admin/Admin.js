import React, { Component } from 'react';
import "./Admin.css";
import Tabs from "../../components/tabs/Tabs";
import AdminLoggedIn from '../admin-logged-in/AdminLoggedIn';


class Admin extends Component {
    render() {
        return (
            <Tabs>
                <div label="Orders" >
                    <div className="content">
                        <AdminLoggedIn onClickViewOrder={this.props.onClickViewOrder}
                            user={this.props.user}
                            onAdminView={this.props.onAdminView} />
                    </div>
                </div>
                <div label="">
                </div>
                <div label="">
                </div>
            </Tabs>
        );
    }
}

export default Admin;
