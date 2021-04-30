import { GridList } from "@material-ui/core";
import { Component } from "react";
import Item from "../../components/cart-item/Item";
import { Constants } from "../../Constants";
import "./Home.css"

class Home extends Component {

    render() {
        console.log("Home");
        return (
            <div className="grid-container">
                <GridList cols={3} cellHeight={250} style={{ height: 'auto' }} >
                    {
                        Constants.PRODUCT_LIST.map(data =>
                            <ul key={data.id}>
                                <Item key={data.id} productData={data} onClickBuy={this.props.onClickBuy} />
                            </ul>
                        )
                    }
                </GridList>
            </div>
        );
    }
}

export default Home;