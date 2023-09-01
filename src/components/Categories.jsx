import React, { useState } from 'react'

const Categories = ({chooseCategory}) => {
    const [categotries,setCategories] = useState([  {
            key: 'all',
            name: 'Все',
        },
        {
            key: 'chairs',
            name: 'Стулья',
        },
        {
            key: 'tables',
            name: 'Столы',
        },
        {
            key: 'sofas',
            name: 'Диваны',
        }]);

  return (
    <div className="categories">
        {categotries.map(el=>(
            <div onClick={()=>chooseCategory(el.key)} key={el.key}>
                {el.name}
            </div>
        ))}
    </div>
  )
}

export default Categories