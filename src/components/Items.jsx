import React from 'react'
import Item from './Item'

const Items = ({items, onAdd}) => {
  return (
    <main>
        {items.map(el => (
            <Item key={el.id} item={el} onAdd={onAdd}/>
        ))}
    </main>
  )
}

export default Items