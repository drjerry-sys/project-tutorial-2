import React, { useState, useEffect } from 'react';
import './App.css';
import { Products, Navbar, Cart } from './components/pages/products';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); {/* destructuring the response */}
    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart)
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  useEffect(()=>{
    fetchProducts();
    fetchCart()
  }, [])
  console.log(cart)

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;