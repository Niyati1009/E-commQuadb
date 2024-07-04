import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, [dispatch, match.params.id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: product._id, quantity: 1 }));
  };

  return (
    <div>
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
