import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, login } from '../redux/actions/authActions';

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(formData));
    } else {
      dispatch(register(formData));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default AuthForm;
