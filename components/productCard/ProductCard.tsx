import React from 'react';

import { Product } from '../../entities/product.entity';

import './ProductCard.css';

type Props = {
  product: Product;
  onFavorite: (Product) => void;
  onCart: (Product) => void;
};

function ProductCard({ product, onFavorite, onCart }: Props) {
  const handleLike = () => {
    onFavorite(product);
  };

  const handleCart = () => {
    onCart(product);
  };

  return (
    <div className='featured__item'>
      <div className='featured__item__pic set-bg' style={{ backgroundImage: `url( ${product.images[0]} )` }}>
        <ul className='featured__item__pic__hover'>
          <li>
            <button type='button' data-testid='custom-favorite' onClick={handleLike}>
              <i className='fa fa-heart' />
            </button>
          </li>
          <li>
            <button type='button' data-testid='custom-cart' onClick={handleCart}>
              <i className='fa fa-shopping-cart' />
            </button>
          </li>
        </ul>
      </div>
      <div className='featured__item__text'>
        <h6>{product.name}</h6>
        <h5>${product.price}</h5>
      </div>
    </div>
  );
}

export default ProductCard;
