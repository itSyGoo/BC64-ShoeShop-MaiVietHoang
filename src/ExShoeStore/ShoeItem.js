import React, { Component } from "react";

export default class ShoeItem extends Component {
  render() {
    let { shoe, handleAddShoe } = this.props;
    return (
      <div className="card mb-4">
        <img className="card-img-top" src={shoe.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{shoe.name}</h4>
          <p className="card-text">{shoe.price}$</p>
          <button
            onClick={() => {
              handleAddShoe(shoe);
            }}
            className="btn btn-dark"
          >
            Add to cart <i className="fa-solid fa-cart-plus" />
          </button>
        </div>
      </div>
    );
  }
}
