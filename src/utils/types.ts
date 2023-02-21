export type CartItemType = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

export type CartType ={
    loading: boolean, 
    cart: CartItemType[],
    total: number, 
    amount: number
}