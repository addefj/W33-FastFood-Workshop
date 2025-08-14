import React from 'react'

const Header = () => {
  return (
    <>
    <div className="container py-2 d-flex justify-content-start">
      <button id="toggleMode" className="btn btn-outline-secondary btn-sm">
        Dark
      </button>
    </div>

    
    <h1 className="text-center mb-4">Fast Food Menu</h1>

    </>
  )
}

export default Header