import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
  const cart = useSelector((state) => state.handleCart); // Access the cart items from the Redux store
  const dispatch = useDispatch();

  const handleButton = (product, action) => {
    if (action === "add") {
      dispatch(addCart(product));
    } else if (action === "remove") {
      dispatch(delCart(product));
    }
  };

  return (
    <div className="container">
      {cart.length === 0 ? (
        <div>Your Cart is Empty</div>
      ) : (
        cart.map((product) => (
          <div className="row" key={product.id}>
            <div className="col-md-4">
              <img src={product.image} alt={product.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.qty} x ${product.price} = ${product.qty * product.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleButton(product, "remove")}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleButton(product, "add")}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
