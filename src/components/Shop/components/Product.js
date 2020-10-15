import React from 'react';
import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="product">
                <div className="product__wrapper" style={{ backgroundImage: `url(${this.props.imageUrl})` }}>
                    <img className="product__image" src={this.props.imageUrl} />
                </div>
                <div>
                    {this.props.name}
                </div>
            </div>
        );
    }
}

export default Product;