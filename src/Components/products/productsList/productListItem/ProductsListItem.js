import React from "react";

const ProductsListItem = ({ id, name, price, deleteProduct, children }) => {
  return (
    <li>
      {children}
      <h3>{name}</h3>
      <p>{price}</p>
      <button id={id} onClick={deleteProduct}>
        Delete
      </button>
    </li>
  );
};

export default ProductsListItem;
