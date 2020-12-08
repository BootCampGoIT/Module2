import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ProductForm from "../productForm/ProductForm";
import ProductsList from "./productsList/ProductsList";

class Products extends Component {
  state = {
    products: [
      { id: "hgvhbj4234fgjh", name: "Milk", price: 20 },
      { id: "hgvhbj423dsfdsfgjh", name: "Water", price: 10 },
    ],
    cart: [],
  };

  addProduct = (product) => {
      this.setState(prevState=> ({products: [...prevState.products, {id: uuidv4(), ...product}]}))
  }

  deleteProduct = (e) => {
    const id = e.target.id;
    this.setState((prevState) => ({
      products: [...prevState.products.filter((product) => product.id !== id)],
    }));
  };

  render() {
    const { products, cart } = this.state;
    return (
      <>
        <ProductsList products={products} deleteProduct={this.deleteProduct} />
        <ProductForm addProduct={this.addProduct}/>
      </>
    );
  }
}

export default Products;
