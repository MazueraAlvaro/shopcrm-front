import React from 'react';

import { Product } from '../../entities/product.entity';

type Props = {
  ProductInfo: Product;
};

function ProductDescription({ ProductInfo }: Props) {
  function ratingCal() {
    const stars = [];
    for (let i = 1; i <= ProductInfo.score; i += 1) {
      stars.push(<i key={i} className='fa fa-star' />);
    }
    if (!Number.isInteger(ProductInfo.score)) {
      stars.push(<i className='fa fa-star-half-o' />);
    }
    return stars;
  }
  return (
    <div className='product__details__text'>
      <h3>{ProductInfo.name}</h3>
      <div className='product__details__rating'>
        <div data-testid='rating-div'>{ratingCal()}</div>
        <span>(18 reviews)</span>
      </div>
      <div className='product__details__price'>${ProductInfo.price}</div>
      <p>{ProductInfo.description}</p>
      <div className='product__details__quantity'>
        <div className='quantity'>
          <div className='pro-qty'>
            <input type='text' value='1' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDescription;
