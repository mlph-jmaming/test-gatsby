import { Component } from "react";
import "./OrderItem.css";

class OrderItem extends Component {

    buttonFunction() {
        if (this.props.user.email === 'admin') {
            this.props.onAdminView(this.props.data);
        } else {
            this.props.onClickViewOrder(this.props.data)
        }
    }

    getCustomerName() {
        if (this.props.user.email === 'admin') {
            return <p>Customer : {this.props.data.customerName}</p>
        }
    }

    render() {
        return (
            <div className="item-container">
                <img alt="" className="item-image"
                    src={this.props.data.image}></img>
                <div>
                    <p className="center-text">{this.props.data.productName}</p>
                    <div className="button-container ">
                        <p>Status : {this.props.data.status}</p>
                        {
                            this.getCustomerName()
                        }
                        <button onClick={() => this.buttonFunction()} className="view-style">View</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default OrderItem;
