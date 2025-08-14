import React from "react";

const MenuSectionCards = () => {
  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card menu-card h-100">
            <div
              className="d-flex justify-content-center align-items-center border-bottom"
              style={{ height: "300px" }} // fixed height for the image container
            >
              <img
                src="src/FastFoodUI/assets/burger.jpg"
                className="img-fluid"
                alt="Burger"
                style={{ maxHeight: "100%", width: "auto" }} // keep aspect ratio
              />
            </div>

            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Burger</h5>
              <p className="card-text">
                A delicious burger with all cheese, lettuce and tomato.
              </p>
              <p>
                <strong>SEK 79.99</strong>
              </p>
              <button className="btn btn-primary mt-auto">Add to order</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card menu-card h-100">
            <div
              className="d-flex justify-content-center align-items-center border-bottom"
              style={{ height: "300px" }}
            >
              <img
                src="src/FastFoodUI/assets/pizza.jpg"
                className="img-fluid"
                alt="Pizza"
                style={{ maxHeight: "100%", width: "auto" }}
              />
            </div>

            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Pizza</h5>
              <p className="card-text">
                Classic pizza mozzarella, tomatoes and basil.
              </p>
              <p>
                <strong>SEK 99.99</strong>
              </p>
              <button className="btn btn-primary mt-auto">Add to order</button>
            </div>
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card menu-card h-100">
            <div
              className="d-flex justify-content-center align-items-center border-bottom"
              style={{ height: "300px" }}
            >
              <img
                src="src/FastFoodUI/assets/fries.jpg"
                className="img-fluid"
                alt="Fries"
                style={{ maxHeight: "100%", width: "auto" }}
              />
            </div>

            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Fries</h5>
              <p className="card-text">
                Crispy fries served hot and fresh.
              </p>
              <p>
                <strong>SEK 59.99</strong>
              </p>
              <button className="btn btn-primary mt-auto">Add to order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSectionCards;
