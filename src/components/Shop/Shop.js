import React from 'react';
import './Shop.css';
import Product from './components/Product';
import { StateContext } from '../StateProvider';

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = { products: [] };
    }

    static contextType = StateContext;

    componentDidMount() {
        this.requestProducts();
    }

    requestProducts() {
        const conditions = this.context[0].filters.map(e => `${Object.keys(e)[0]}=${Object.values(e)[0]}`);

        let url = 'http://localhost:8000/api/products?';

        conditions.forEach(e => {
            url += e;
        });

        fetch(url, { method: 'GET', headers: { Accept: 'application/json' } }).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ products: data })
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const productsList = this.state.products.map(e => <Product key={e.id} imageUrl={`${this.context[0].baseUrl}product${e.id}.png`} name={e.name} />)
        return (
            <div className="shop">
                <div className="shop__productsContainer">
                    {productsList}
                </div>
            </div>
        );
    }
}

export default Shop;