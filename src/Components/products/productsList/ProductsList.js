import React from "react";
import ProductsListItem from "./productListItem/ProductsListItem";

const ProductsList = ({ products, deleteProduct }) => {
  return (
    <ul>
      {products.map((product) => (
        <ProductsListItem
          key={product.id}
          {...product}
          deleteProduct={deleteProduct}>
          <h2>Product name:</h2>
        </ProductsListItem>
      ))}
    </ul>
  );
};

export default ProductsList;

// [
//   <li key="hgvhbj4234fgjh">
//           <h2>Milk</h2>
//           <p>20</p>
//         </li>,
//         <li key="hgvhbj423dsfdsfgjh">
//           <h2>Water</h2>
//           <p>10</p>
//         </li>,

// ]
