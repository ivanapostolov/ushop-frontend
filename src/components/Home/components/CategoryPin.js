import React from 'react';
import './CategoryPin.css';

class CategoryPin extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.callback(this.props.name);
    }

    render() {
        return (
            <div className="category" onClick={this.handleClick}>
                <div className="category__wrapper" style={{ backgroundImage: `url(${this.props.imageUrl})` }}>
                    <img className="category__image" src={this.props.imageUrl} />
                </div>
                <span href="category.html">{this.props.name}</span>
            </div>
        );
    }
}

export default CategoryPin;