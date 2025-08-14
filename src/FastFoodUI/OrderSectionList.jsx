import React from 'react'

const OrderSectionList = () => {
  return (
    
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

  )
}

export default OrderSectionList