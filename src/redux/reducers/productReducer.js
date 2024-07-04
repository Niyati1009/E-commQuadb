const initialState = {
    products: [],
    product: null,
    loading: true,
    error: null
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PRODUCTS':
        return { ...state, products: action.payload, loading: false };
      case 'GET_PRODUCT':
        return { ...state, product: action.payload, loading: false };
      case 'PRODUCT_ERROR':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default productReducer;
  