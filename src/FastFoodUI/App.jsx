import React from 'react'

const App = () => {
  return (
    <>
    <div className="container py-2 d-flex justify-content-start">
      <button id="toggleMode" className="btn btn-outline-secondary btn-sm">
        Dark
      </button>
    </div>

    
    <h1 className="text-center mb-4">Fast Food Menu</h1>

    
    <div className="container">
      <div className="row g-4">
        
        <div className="col-md-4">
          <div className="card menu-card">
            <img
              src="https://placehold.co/400x300"
              className="card-img-top"
              alt="Burger"
            />
            <div className="card-body">
              <h5 className="card-title">Burger</h5>
              <p className="card-text">A delicious burger with all the fixings.</p>
              <p><strong>SEK 79.99</strong></p>
              <button className="btn btn-primary">Add to order</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card menu-card">
            <img
              src="https://placehold.co/400x300"
              className="card-img-top"
              alt="Pizza"
            />
            <div className="card-body">
              <h5 className="card-title">Pizza</h5>
              <p className="card-text">
                classNameic pizza with your favorite toppings.
              </p>
              <p><strong>SEK 99.99</strong></p>
              <button className="btn btn-primary">Add to order</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card menu-card">
            <img
              src="https://placehold.co/400x300"
              className="card-img-top"
              alt="Fries"
            />
            <div className="card-body">
              <h5 className="card-title">Fries</h5>
              <p className="card-text">Crispy golden fries served hot and fresh.</p>
              <p><strong>SEK 59.99</strong></p>
              <button className="btn btn-primary">Add to order</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="container my-4">
      <h3>Your order</h3>
      <div
        className="border border-secondary border-opacity-25 rounded px-5 pt-5 pb-2"
      >
        <ul className="list-group">
          <h5 className="px-3">Order details</h5>
          <li
            className="list-group-item border-0 d-flex justify-content-between py-0"
          >
            Product
            <span>
              <button className="btn btn-sm btn-outline-secondary">+</button>
              <span className="mx-2">1</span>
              <button className="btn btn-sm btn-outline-secondary">-</button>
            </span>
            <span>Price: 10 SEK</span>
          </li>
          <li className="list-group-item border-0 d-flex justify-content-between">
            Product
            <span>
              <button className="btn btn-sm btn-outline-secondary">+</button>
              <span className="mx-2">1</span>
              <button className="btn btn-sm btn-outline-secondary">-</button>
            </span>
            <span>Price: 10 SEK</span>
          </li>
          <li className="list-group-item border-0 d-flex justify-content-end">
            <strong>Total: 100 SEK</strong>
          </li>
        </ul>
      </div>
    </div>

    </>
  )
}

export default App