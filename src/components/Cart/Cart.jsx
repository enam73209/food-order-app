import React, { useContext, useState, Fragment } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "./../../store/cart-contex";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckingOut, setIsCheckingout] = useState(false);
  const [orderSubmissionError, setOrderSubmissionError] = useState(null);
  const [isOrderSubmitting, setIsOrderSubmitting] = useState(false);
  const [ordersubmitted, setOrderSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckingout(true);
  };

  const onCancelOrder = () => {
    setIsCheckingout(false);
  };

  const onSubmitOrder = async (userData) => {
    setIsOrderSubmitting(true);
    try {
      const response = await fetch(
        "https://food-order-app-a0b24-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: userData,
            orderedItems: cartCtx.items,
          }),
        }
      );

      if (!response.ok) {
        setOrderSubmissionError("Failed to place order.");
      }
      setOrderSubmitted(true);
      setIsOrderSubmitting(false);
      cartCtx.clearCart();
    } catch (error) {
      setOrderSubmissionError("Failed to place order.");
      setIsOrderSubmitting(false);
    }
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const ModalActions = (
    <div className={classes.actions}>
      <button className={classes["buttton--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems > 0 && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckingOut && (
        <Checkout
          orderSubmissionError={orderSubmissionError}
          isOrderSubmitting={isOrderSubmitting}
          onSubmit={onSubmitOrder}
          onCancel={onCancelOrder}
        />
      )}
      {!isCheckingOut && ModalActions}
    </Fragment>
  );

  const orderSubmissionSuccessMessage = (
    <Fragment>
      <p className={classes.successMessage}>
        Your Order has been Placed successfully
      </p>
      <div className={classes.actions}>
        <button className={classes["buttton--alt"]} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {ordersubmitted ? orderSubmissionSuccessMessage : cartContent}
    </Modal>
  );
};

export default Cart;
