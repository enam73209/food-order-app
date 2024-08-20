import CartContext from "./cart-contex";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;

    if (updatedItemsIndex !== -1) {
      const existingItem = state.items[updatedItemsIndex];
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[updatedItemsIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const removedItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    let removedItem;
    let updatedItems;
    let updatedTotalAmount;
    if (removedItemsIndex !== -1) {
      removedItem = state.items[removedItemsIndex];
      removedItem = {
        ...removedItem,
        amount: removedItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[removedItemsIndex] = removedItem;
      updatedTotalAmount = state.totalAmount - removedItem.price;
      if (removedItem.amount === 0) {
        updatedItems = updatedItems.filter(
          (item) => item.id !== removedItem.id
        );
      }
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount >= 0 ? updatedTotalAmount : 0,
    };
  }
  if(action.type==='CLEAR'){
    return defaultCartState;
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearItemFromCartHandler=()=>{
    dispatchCartAction({type:"CLEAR"});
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart:clearItemFromCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
