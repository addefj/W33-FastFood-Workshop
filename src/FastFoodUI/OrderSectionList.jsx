import React from "react";

const OrderSectionList = ({ orderItems, onIncrement, onDecrement }) => {
  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h3>Your order</h3>
      <div className="border border-secondary border-opacity-25 rounded px-4 pt-4 pb-2">
        <ul className="list-group">
          <h5 className="px-3">Order details</h5>

          {orderItems.length === 0 ? (
            <li className="list-group-item border-0 py-0">
              No items in your order
            </li>
          ) : (
            orderItems.map((item) => (
              <li className="list-group-item border-0 py-2" key={item.id}>
                <div className="row align-items-center">
                  {/* Name */}
                  <div className="col-4 col-md-5">{item.name}</div>

                  {/* Quantity controls */}
                  <div className="col-4 col-md-3 d-flex justify-content-start align-items-center">
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => onIncrement(item.id)}
                    >
                      +
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary ms-2"
                      onClick={() => onDecrement(item.id)}
                    >
                      -
                    </button>
                  </div>

                  {/* Price */}
                  <div className="col-4 col-md-4 text-end">
                    <strong>
                      {(item.price * item.quantity).toFixed(2)} SEK
                    </strong>
                  </div>
                </div>
              </li>
            ))
          )}

          <li className="list-group-item border-0 d-flex justify-content-end">
            <strong>Total: {total.toFixed(2)} SEK</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSectionList;
