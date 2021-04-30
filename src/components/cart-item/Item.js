import { Component } from "react";
import "./item.css"

class Item extends Component {

    render() {
        return (
            <div className="item-container">
                <img alt="" className="item-image"
                    src={this.props.productData.image}></img>
                <div>
                    <p className="center-text">{this.props.productData.productName}</p>
                    <div className="button-container">
                        <button onClick={() => this.props.onClickBuy(this.props.productData)} className="buy-style">Buy</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Item;
