import React from 'react'

const Item = ({item, onAdd}) => {
  return (
    <div className='item'>
        <img src={'./img/' + item.img}/>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div onClick={()=>{onAdd(item)}} className='add-to-cart'>+</div>
    </div>
  )
}

export default Item