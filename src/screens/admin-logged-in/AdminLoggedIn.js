
import { Component } from 'react';
import OrderItem from "../../components/order-item/OrderItem";
import { Constants } from "../../Constants";
import "./AdminLoggedIn.css";
import { GridList } from "@material-ui/core";

export default class AdminLoggedIn extends Component {

    state = {
        orders: [],
        user: Constants.getToLocalStorage(Constants.LOGGED_IN_USER)
    }

    constructor() {
        super();
        console.log("admin");
        this.state.orders = Constants.getToLocalStorage(Constants.ORDER) === null
            ? [] : Constants.getToLocalStorage(Constants.ORDER)
                .filter(item => item.status === Constants.STATUS_PENDING
                ).map(order => order);

    }

    render() {
        return (
            <div className="admin-container">
                <GridList cols={3} cellHeight={260} style={{ height: 'auto' }} >
                    {
                        this.state.orders.map(order =>
                            <ul key={order.id}>
                                <OrderItem key={order.title} data={order}
                                    user={this.props.user}
                                    onClickViewOrder={this.props.onClickViewOrder}
                                    onAdminView={this.props.onAdminView} />
                            </ul>
                        )
                    }
                </GridList>
            </div>
        );
    }
}
