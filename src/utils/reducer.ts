import { CartItemType, CartType } from "./types";

export const reducer = (state: any, action: any) => {
  // console.log(state);
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
        (cartItem: CartItemType) => cartItem.id !== action.payload
      ),
    };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal: any, cartItem: any) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return {
      ...state,
      total,
      amount,
    };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    console.log("provaaa", action.payload);
    return { ...state, cart: action.payload, loading: false };
  }
  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart: any = state.cart.map((cartItem: any) => {
      if (cartItem.id === action.payload.id) {
        if (action.payload.type === "inc") {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        if (action.payload.type === "dec") {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
      }
      return cartItem
    })
    .filter((cartItem: CartItemType) => cartItem.amount > 0);
    return { ...state, cart: tempCart };
  }


  return state;
};

export default reducer;
