import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.items && cart.items.map(item => (
        <div key={item._id}>
          <h2>{item.productId.name}</h2>
          <p>{item.quantity}</p>
          <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
