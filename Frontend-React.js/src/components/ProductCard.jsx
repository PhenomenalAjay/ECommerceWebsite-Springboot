import React from 'react'

function ProductCard({items, addToCart}) {
    let rating = 4;
  return (
    <div>
        <div className="card">
            <img src={items.image ? items.image : "https://m.media-amazon.com/images/I/41UC0ARSbRL._SR480,440_.jpg"} alt={items.name} className="prodimg" />
            <h3 className="prodname">{items.name}</h3>
            <p className="proddesc"> {items.description}</p>
            <div className='rating'>
                {
                    [1, 2, 3, 4, 5].map((star) => (
                        <span style={{color:star<=items.rating?"#f39c12":"#ccc"}}>&#9733;</span>
                ))}
            </div>
            <div className="price">price : {items.price}</div>
            <div className="stock">{items.stock} in Stock </div>
            <button className="addcart" onClick={() => addToCart(items)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard
