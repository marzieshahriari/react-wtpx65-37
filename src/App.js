import React,{useState} from "react";
import "./style.css";
import {products} from "./product";
import Cart from "./cart";

const img_url = 'https://dkstatics-public.digikala.com/digikala-products/120090704.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'




export default function App() {

  const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
  const existingIndex = cartItems.findIndex(item => item.id === product.id);
  if (existingIndex !== -1) {
    // If the item already exists, increase its quantity
    const newCartItems = [...cartItems];
    newCartItems[existingIndex].quantity += 1;
    setCartItems(newCartItems);
  } else {
    // Otherwise, add the new item to the cart
    const newCartItems = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(newCartItems);
  }
} 


  return (
    <>
      <div>
      <Cart selected_products= {cartItems} />
      </div>
      {products.map((product) => (
        <div className='products'>
          <div key={product.id} className="product">
            <img className="product_img" src={img_url}/>
            <div className="context">
              <h2 className="product_name">{product.name}</h2>
              <p className="product_des">{product.description}</p>
            </div>  
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        </div>  
       ))
     } 
    </>
  );
}
