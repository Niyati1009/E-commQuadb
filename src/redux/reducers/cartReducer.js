const initialState = {
    cart: [],
    loading: true,
    error: null
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CART':
        return { ...state, cart: action.payload, loading: false };
      case 'ADD_TO_CART':
      case 'REMOVE_FROM_CART':
        return { ...state, cart: action.payload, loading: false };
      case 'CART_ERROR':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  