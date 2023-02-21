import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
  useState,
} from "react";
import cartItems from "../utils/data";
import reducer from "../utils/reducer";
export const GlobalContext = createContext({});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const url = "https://course-api.com/react-useReducer-cart-project";

  const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState) as any;

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };
const increase =(id:number)=>{
  dispatch({ type: "INCREASE", payload: id });

}
const decrease =(id:number)=>{
  dispatch({ type: "DECREASE", payload: id });

}
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        clearCart,
        remove, 
        increase, 
        decrease
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
