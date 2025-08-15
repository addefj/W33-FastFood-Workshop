import React, { useState } from "react";
import Header from "./Header";
import MenuSectionCards from "./MenuSectionCards";
import OrderSectionList from "./OrderSectionList";

const App = () => {
  const [orderItems, setOrderItems] = useState([]);

  const incrementQuantity = (id, productData = null) => {
    setOrderItems((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.id === id);
      if (existingItem) {
        return prevOrder.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      if (productData) {
        return [...prevOrder, { ...productData, quantity: 1 }];
      }
      return prevOrder;
    });
  };

  const decrementQuantity = (id) => {
    setOrderItems((prevOrder) =>
      prevOrder
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Header />
      <MenuSectionCards
        onAddToOrder={(product) => incrementQuantity(product.id, product)}
      />
      <OrderSectionList
        orderItems={orderItems}
        onIncrement={incrementQuantity}
        onDecrement={decrementQuantity}
      />
    </>
  );
};

export default App;
