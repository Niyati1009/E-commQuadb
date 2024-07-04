import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthForm from './components/AuthForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { loadUser } from './redux/actions/authActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<AuthForm isLogin />} />
          <Route path="/register" element={<AuthForm />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
