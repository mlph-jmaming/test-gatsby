import { Component } from "react";
import { Constants } from "../../Constants";
import "./ItemDetails.css";
import { User } from "../../model/user"

class ItemDetails extends Component {

    state = {
        user: <User />,
        order: {
            id: 0,
            productId: 0,
            userId: 0,
            quantity: 0,
            status: "",
            image: '',
            productName: '',
            price: 0,
            deliveryAddress: '',
            sellerName: '',
            sellerAddress: ''
        },
        totalPrice: 0

    }

    constructor(props) {
        super(props);
        this.state.user = Constants.getToLocalStorage(Constants.LOGGED_IN_USER);
        this.state.order = this.props.selectedProduct;
        if (this.state.order.quantity.isNaN || this.state.order.quantity === undefined) {
            this.state.totalPrice = this.state.order.productPrice * 0;
        } else {
            this.state.totalPrice = this.state.order.productPrice * this.state.order.quantity;
        }

    }

    onInputChange(quantity) {
        const userState = { ...this.state };
        userState.order.quantity = quantity;
        userState.totalPrice = this.state.order.productPrice * quantity;
        this.setState(userState);
    }

    onClickOrder() {
        if (this.state.order.quantity <= 1) {
            alert('Please add quantity.');
            return;
        }
        const order = { ...this.state.order };
        order.id = Constants.getToLocalStorage(Constants.ORDER) === null ? 1 : Constants.getToLocalStorage(Constants.ORDER).length + 1;
        order.productId = this.state.order.id;
        order.userId = this.state.user.id;
        order.status = Constants.STATUS_PENDING;
        order.image = this.state.order.image;
        order.productName = this.state.order.productName;
        order.productPrice = this.state.order.productPrice;
        order.deliveryAddress = this.state.user.address;
        order.sellerName = this.state.order.sellerName;
        order.sellerAddress = this.state.order.sellerAddress;
        order.customerName = this.state.user.firstName + " " + this.state.user.lastName;
        this.props.orderOnClick(order);
    }

    displayButtonAction() {
        if (this.state.order.status !== undefined && this.state.order.status === Constants.STATUS_TO_RECEIVE
            && this.state.user.email !== 'admin') {
            return <button onClick={() => this.props.orderReceive(this.state.order)} className={"button-buy"}>Order Received</button>
        } else if (this.state.order.status === Constants.STATUS_COMPLETED) {
            return;
        } else if (this.state.order.status === Constants.STATUS_PENDING && this.state.user.email !== 'admin') {
            return <p>Note: Your order is in process..</p>;
        }
        else if (this.state.user.email === 'admin') {
            return <button onClick={() => this.props.onOrderApproved(this.state.order)} className={"button-buy"}>Approve</button>

        }
        return <button onClick={() => this.onClickOrder()} className={"button-buy"}>Buy</button>

    }

    isInputTextDisabled() {
        if (this.state.order.status === Constants.STATUS_COMPLETED ||
            this.state.order.status === Constants.STATUS_PENDING ||
            this.state.order.status === Constants.STATUS_TO_RECEIVE) {
            return true;
        }
        return false;
    }

    getDeliveryAddress() {
        if (this.state.order.deliveryAddress !== undefined) {
            return this.state.order.deliveryAddress;
        }
        return this.state.user.address;

    }

    render() {
        return (
            <div className="details-container">
                <img alt="" className="item-details-image"
                    src={this.state.order.image}></img>
                <p className="details-format">{this.state.order.productName}</p>
                <p className="details-format">Price : P {this.state.order.productPrice}</p>
                <p className="details-format">Quantity : <input disabled={this.isInputTextDisabled()} onChange={(e) => this.onInputChange(e.target.value)}
                    value={this.state.order.quantity}
                    type="number"></input></p>
                <p className="details-format">Total : P {this.state.totalPrice}</p>
                <p className="details-format">Deliver Address : {this.getDeliveryAddress()}</p>
                <br />
                <p className="details-format">Seller info</p>
                <p className="details-format">Name : {this.state.order.sellerName}</p>
                <p className="details-format">Pick-up Address : {this.state.order.sellerAddress}</p>
                {
                    this.displayButtonAction()
                }

            </div>
        );
    }
}

export default ItemDetails;