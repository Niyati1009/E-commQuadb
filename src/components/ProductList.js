import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product._id}>
          <Link to={`/products/${product._id}`}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
