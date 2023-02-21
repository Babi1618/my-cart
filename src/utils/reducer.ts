export const reducer = (state: any, action: any) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter(
        (cartItem: any) => cartItem.id !== action.payload
      ),
    };
  }
  if (action.type === "INCREASE") {
    let tempCart: any = state.cart.map((cartItem: any) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  return state;
};

export default reducer;
