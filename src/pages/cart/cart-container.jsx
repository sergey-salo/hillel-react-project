import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, clear } from '../../store/cartSlice';

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => dispatch(remove({ id }));
  const clearCart = () => dispatch(clear());

  const printCart = () => {
    const cartData = cart.map((item) => {
      return (
        <Fragment key={item.id}>
          <article className='cart-item'>
            <button onClick={() => removeFromCart(item.id)}>x</button>
            <h3 className='cart-item__title'>{item.title}</h3>
            <div className='cart-item__picture'>
              <img className='cart-item__image' src={item.thumbnail} alt={item.title} />
            </div>
            <div className='cart-item__price'>Price: {item.price} $</div>
          </article>
        </Fragment>
      );
    });

    return cartData;
  };

  useEffect(() => {
    document.title = 'E-Commerce - Cart';
  }, []);

  return (
    cart.length > 0 && (
      <div className='cart__content'>
        <div className='cart-items'>{printCart()}</div>
        <div>
          <button className='cart-button' onClick={clearCart}>
            Clear cart
          </button>
        </div>
      </div>
    )
  );
};

export default CartContainer;
