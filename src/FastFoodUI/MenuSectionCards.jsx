import React from 'react'

const MenuSectionCards = () => {
  return (
    
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
  )
}

export default MenuSectionCards