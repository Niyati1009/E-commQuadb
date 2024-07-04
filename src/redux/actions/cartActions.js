import axios from 'axios';

export const getCart = () => async dispatch => {
  try {
    const res = await axios.get('/api/cart');
    dispatch({ type: 'GET_CART', payload: res.data });
  } catch (error) {
    dispatch({ type: 'CART_ERROR', payload: error.response.data });
  }
};

export const addToCart = (item) => async dispatch => {
  try {
    const res = await axios.post('/api/cart', item);
    dispatch({ type: 'ADD_TO_CART', payload: res.data });
  } catch (error) {
    dispatch({ type: 'CART_ERROR', payload: error.response.data });
  }
};

export const removeFromCart = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/cart/${id}`);
    dispatch({ type: 'REMOVE_FROM_CART', payload: res.data });
  } catch (error) {
    dispatch({ type: 'CART_ERROR', payload: error.response.data });
  }
};
