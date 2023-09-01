import React, { useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Order from './Order';





const Header = ({orders, onDelete}) => {
  const [cartOpen, setCartOpen] = useState(false)
  
  const showOrders = (props) =>{
    let summa = 0;
    props.forEach(el => summa+= Number.parseFloat(el.price));
    return (
      <>
        {props.map(el=>(
        <Order key={el.id} item={el} onDelete={onDelete}/>
      ))}
      <p className='summ'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
      </>
    )
  }
  const showNothing = (props) =>{
    return (
      <div className="empty">
        <h2>Ваша корзина пустая</h2>
      </div>
    )
  }



  return (
    <header>
        <div>
            <span className="logo">House Staff</span>

            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>

            <FaShoppingCart onClick={()=>{setCartOpen(!cartOpen)}} className={`shop-cart-button ${cartOpen && 'active'}`} />
          {cartOpen && (
            <div className="shop-cart">
              {orders.length > 0 ? 
               showOrders(orders): showNothing()}
                
            </div>
          )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}

export default Header