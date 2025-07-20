// import React, { useEffect,useState } from 'react'
// import { getProducts } from "./api";
// import './App.css';
// function App() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//   getProducts().then(response => {
//     setProducts(response.data);
//   }).catch(error => {
//     console.error("Error fetching products:", error);
//   });
//   }, []);



//   return (
//     <div className="appcontainer">
//      {
//       products.map((product) => (
//         <ProductCard items={product}/>
//         ))
//      }
//     </div>
//   )
// }

// export default App
// =======
import ProductCard from "./components/ProductCard"
import React, { useEffect, useState } from 'react'
import { getProducts } from "./api";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getProducts().then(response => {
      setProducts(response.data);
    }).catch(error => {
      console.error("Error fetching products:", error);
    });
  }, []);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <header>Ecommerce Store</header>
      <div className="appcontainer">
        <div className="products-section">
          {products.map((product) => (
            <ProductCard key={product.id} items={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="cart-section">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <img src={item.image ? item.image : "https://m.media-amazon.com/images/I/41UC0ARSbRL._SR480,440_.jpg"} alt={item.name} className="cart-prodimg" />
                  <div><strong>{item.name}</strong></div>
                  <div>Price: ${item.price}</div>
                  <div style={{marginBottom: '5px', fontStyle: 'italic'}}>{item.description}</div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <span>Quantity:</span>
                    <button onClick={() => {
                      setCartItems(prevItems => prevItems.map(i => i.id === item.id ? {...i, quantity: Math.max(i.quantity - 1, 1)} : i));
                    }}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => {
                      setCartItems(prevItems => prevItems.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i));
                    }}>+</button>
                    <button style={{marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer'}} onClick={() => {
                      setCartItems(prevItems => prevItems.filter(i => i.id !== item.id));
                    }}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App
