import React from 'react';
import '../../index.css';
import { useDispatch } from 'react-redux';
import { add } from '../../store/cartSlice';

const ProductsItem = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => dispatch(add(item));

  return (
    <article className='offer-item'>
      <h3 className='offer-item__title'>{item.title}</h3>
      <div className='offer-item__picture'>
        <img className='offer-item__image' src={item.thumbnail} alt={item.title} />
      </div>
      <div className='offer-item__price'>Price: {item.price} $</div>
      <div className='offer-item__action'>
        <button className='offer-item__button btn btn--sm' onClick={addToCart}>
          Add to cart
        </button>
      </div>
      <p className='offer-item__description'>{item.description}</p>
    </article>
  );
};

export default ProductsItem;
