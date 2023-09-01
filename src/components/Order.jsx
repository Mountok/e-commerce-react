import React from 'react'
import { FaTrash} from 'react-icons/fa'
const Order = ({item,onDelete}) => {
  return (
    <div className='item'>
        <img src={'./img/' + item.img}/>
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
        <FaTrash onClick={()=>{onDelete(item.id)}} className='delete-item'/>
    </div>
  )
}

export default Order