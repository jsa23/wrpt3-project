const initialState = {
    cart: []
  };

  const ADD_TO_CART="ADD_TO_CART";

 export const addToCart=(item) => {
     return {
         type: ADD_TO_CART,
         payload: item,
     }
 }


  const cartReducer = (state = initialState, action) => {
      switch(action.type) {
          case 'ADD_TO_CART':
              return {
                  ...state,
                  cart: [...state.cart, action.payload]
              };
        //   case 'UPDATE_CART_QUANTITY':
        //       let item = cart.find(item => item.product.id === action.payload.productId);
        //       let newCart = cart.filter(item => item.product.id !== action.payload.productId);
        //       item.quantity = action.payload.quantity;
        //       newCart.push(item);
        //       return {
        //           ...state,
        //           cart: newCart
        //       };
        //   case 'REMOVE_FROM_CART':
        //       return {
        //           ...state,
        //           cart: cart.filter(item => item.product.id !== action.payload.productId)
        //       };
          default:
              return state;
      }
  };
  export default cartReducer;