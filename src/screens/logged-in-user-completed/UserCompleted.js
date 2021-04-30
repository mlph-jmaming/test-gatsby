
import { Component } from 'react';
import OrderItem from "../../components/order-item/OrderItem";
import { Constants } from "../../Constants";
import "./UserCompleted.css";
import { GridList } from "@material-ui/core";

export default class UserCompleted extends Component {

    state = {
        orders: Constants.getToLocalStorage(Constants.ORDER) === null ? [] : Constants.getToLocalStorage(Constants.ORDER),
        user: Constants.getToLocalStorage(Constants.LOGGED_IN_USER)
    }

    constructor() {
        super();
        this.state.orders = Constants.getToLocalStorage(Constants.ORDER) === null
            ? [] : Constants.getToLocalStorage(Constants.ORDER)
                .filter(item => item.userId === this.state.user.id
                    && item.status === Constants.STATUS_COMPLETED
                ).map(order => order);

    }

    render() {
        return (
            <div className="progress-container">
                <GridList cols={3} cellHeight={260} style={{ height: 'auto' }} >
                    {
                        this.state.orders.map(order =>
                            <ul key={order.id}>
                                <OrderItem key={order.title} data={order} onClickViewOrder={this.props.onClickViewOrder} user={this.props.user} />
                            </ul>
                        )
                    }
                </GridList>
            </div>
        );
    }
}
