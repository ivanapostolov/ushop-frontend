import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="banner"><span>Ushop - the best shopping experience</span></div>

            <Product
                id="0"
                name="Ball with other additional imformation"
                imageUrl="http://localhost:8000/shirt.png"
                price="15.99"
                amount="10"
            />

            <Product
                id="0"
                name="Ball with other additional imformation"
                imageUrl="http://localhost:8000/shirt.png"
                price="15.99"
                amount="10"
            />
        </div>
    );
}

export default Home;