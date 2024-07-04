import axios from 'axios';

export const register = (formData) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/register', formData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL' });
  }
};

export const login = (formData) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL' });
  }
};

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({ type: 'USER_LOADED', payload: res.data });
  } catch (error) {
    dispatch({ type: 'AUTH_ERROR' });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};
