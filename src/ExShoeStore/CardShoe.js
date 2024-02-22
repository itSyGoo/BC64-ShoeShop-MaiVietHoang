import React, { Component } from "react";

export default class CardShoe extends Component {
  renderListTrShoeCart = () => {
    let { dataCartShoe, handleDeleteShoe, handleChangeQuantity } = this.props;
    return dataCartShoe.map((shoe, index) => {
      return (
        <tr key={index}>
          <td>{shoe.name}</td>
          <td>
            <img width={50} src={shoe.image} alt="" />
          </td>
          <td>{shoe.price}</td>
          <td>
            <button
              onClick={() => {
                handleChangeQuantity(shoe.id, -1);
              }}
              className="btn btn-warning me-2"
            >
              -
            </button>
            <span>{shoe.soLuong}</span>
            <button
              onClick={() => {
                handleChangeQuantity(shoe.id, 1);
              }}
              className="btn btn-success ms-2"
            >
              +
            </button>
          </td>
          <td>{shoe.price * shoe.soLuong}</td>
          <td>
            <button
              onClick={() => {
                handleDeleteShoe(shoe.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>{this.renderListTrShoeCart()}</tbody>
        </table>
      </div>
    );
  }
}
