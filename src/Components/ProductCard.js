import React from 'react';
import './ProductCard.css';

const ProductCard = ({ imageSrc, name, description, price }) => {
  return (
    <div className="product-card">
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{price}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
