import React from 'react';
import { Component } from "react";
import "./DashBoard.css";
import Tabs from "../../components/tabs/Tabs";
import Home from '../home/Home';
class DashBoard extends Component {

    render() {
        return (
            <Tabs>
                <div label="Home Page" >
                    <div className="content">
                        <Home onClickBuy={this.props.onClickBuy} />
                    </div>
                </div>
                <div label="" />
                <div label="" />
            </Tabs>
        );
    }
}

export default DashBoard;
