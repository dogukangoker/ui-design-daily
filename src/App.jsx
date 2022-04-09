import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='shopping-cart'>
        <div className='shopping-cart__header'>
          Your shopping cart
        </div>
        <div className='shopping-cart__id'>
          ID: 548856
        </div>
        <div className='shopping-cart__product'>
          <div className='shopping-cart__product_image'>
            <img src="https://i.hizliresim.com/c7flpgw.png" alt='test' />
          </div>
          <div className='shopping-cart__product_information'>
          Ecovacs Deebot OZMO N8 + robot vacuum cleaner W125978483
          <div className='shopping-cart__product_available'>
            In stock
          </div>
          </div>
        </div>
        <div className='shopping-cart__product_piece'>
          <button className='shopping-cart_product_piece_button'>-</button>
          <input readOnly defaultValue="1" />
          <button className='shopping-cart_product_piece_button'>+</button>
        </div>
        <div className='hr'></div>
        <div className='shopping-cart_product_info'>
          <div>
            Standart package
          </div>
          <div>
            FREE
          </div>
        </div>
        <div className='shopping-cart_product_info'>
          <div>
            Total VAT
          </div>
          <div>
            879,-
          </div>
        </div>
        <div className='shopping-cart_product_info'>
          <div>
            Total NOK
          </div>
          <div>
            4395,-
          </div>
        </div>
        <div className='shopping-cart_product_footertext'>
          Got a gift card or a promotional code?
        </div>
        <div className='shopping-cart_checkout'>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default App
