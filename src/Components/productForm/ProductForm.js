import React, { Component } from "react";

class ProductForm extends Component {
  state = {
    name: "",
    price: "",
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target.name;
    this.props.addProduct({ ...this.state });
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, price } = this.state;
    return (
      <form
        name='productForm'
        onSubmit={this.onHandleSubmit}
        style={{ display: "flex", flexDirection: "column" }}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Price:
          <input
            type='text'
            name='price'
            value={price}
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Add product</button>
      </form>
    );
  }
}

export default ProductForm;
