import React from "react";

const MenuSectionCards = ({ onAddToOrder }) => {
  const products = [
    {
      id: 1,
      name: "Burger",
      description: "A delicious burger with all cheese, lettuce and tomato.",
      price: 69,
      image: "src/FastFoodUI/assets/burger.jpg"
    },
    {
      id: 2,
      name: "Pizza",
      description: "Classic pizza mozzarella, tomatoes and basil.",
      price: 120,
      image: "src/FastFoodUI/assets/pizza.jpg"
    },
    {
      id: 3,
      name: "Fries",
      description: "Crispy fries served hot and fresh.",
      price: 49,
      image: "src/FastFoodUI/assets/fries.jpg"
    }
  ];

  return (
    <div className="container">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4" key={product.name}>
            <div className="card menu-card h-100">
              <div
                className="d-flex justify-content-center align-items-center border-bottom"
                style={{ height: "300px" }}
              >
                <img
                  src={product.image}
                  className="img-fluid"
                  alt={product.name}
                  style={{ maxHeight: "100%", width: "auto" }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p>
                  <strong>{product.price} SEK</strong>
                </p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => onAddToOrder(product)}
                >
                  Add to order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSectionCards;
