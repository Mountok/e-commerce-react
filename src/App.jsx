import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories'



const App = () => {
  const items = [
    {
      id: 1,
      title:'Стул серый',
      img: 'chair.jpg',
      desc: 'Это текст рыба, не пытайтесь его читать',
      category: 'chairs',
      price: "49.99"
    },
    {
      id: 2,
      title:'Стол',
      img: 'table.jpg',
      desc: 'Это текст рыба, не пытайтесь его читать',
      category: 'tables',
      price: "149.99"
    },
    {
      id: 3,
      title:'Диван',
      img: 'sofa.jpg',
      desc: 'Это текст рыба, не пытайтесь его читать',
      category: 'sofas',
      price: "229.99"
    },
    {
      id: 4,
      title:'Стул серый 2',
      img: 'chair.jpg',
      desc: 'Это текст рыба, не пытайтесь его читать',
      category: 'chairs',
      price: "49.99"
    },
    {
      id: 5,
      title:'Стол 2',
      img: 'table.jpg',
      desc: 'Это текст рыба, не пытайтесь его читать',
      category: 'tables',
      price: "149.99"
    },
    {
      id: 6,
      title:'Диван 2',
      img: 'sofa.jpg',
      desc: 'Это текст рыба, не пытайтесь его читать',
      category: 'sofas',
      price: "229.99"
    },
    {
      id: 7,
      title:'Стул серый 3',
      img: 'chair.jpg',
      desc: 'Это текст рыба, не пытайтесь его читать',
      category: 'chairs',
      price: "49.99"
    },
    {
      id: 8,
      title:'Стол 3',
      img: 'table.jpg',
      desc: 'Это текст рыба, не пытайтесь его читать',
      category: 'tables',
      price: "149.99"
    },
    {
      id: 9,
      title:'Диван 3',
      img: 'sofa.jpg',
      desc: 'Это текст рыба, не пытайтесь его читать',
      category: 'sofas',
      price: "229.99"
    },
  ]
  const [orders, setOrders] = useState([])
  const [currentItems,setCurrentItems] = useState([...items]);
  const addToOrder = (item)=>{
    let isInArray = false;
    orders.forEach(el=>{
      if(el.id === item.id){
        isInArray = true;
      }
    })
    if(!isInArray) setOrders([...orders, item]);
  }
  const deleteOrder = (id) =>{
    setOrders([...orders.filter(el => el.id !== id)]);

  }
  const chooseCategory = (category)=>{
    category == 'all' ? setCurrentItems([...items])
    : setCurrentItems([...items.filter(el=>el.category == category)])
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory}/>
      <Items onAdd={addToOrder} items={currentItems}/>
      <Footer />
    </div>
  )
}

export default App