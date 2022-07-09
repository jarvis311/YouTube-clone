import React from 'react'

const ExploreCatagory = ({Icon, title}) => {
  return (
    <div className='ExploreCatagory'>
        <Icon className="exlore_icon"/>
        <p>{title}</p>
    </div>
  )
}

export default ExploreCatagory