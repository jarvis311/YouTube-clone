import React from 'react'
const SidebarRow = ({title, Icon, selected}) => {
  return (
    <div className={`sidebar_row ${selected && 'selected'}`}>
        <Icon className="sidebarRow_icon"/>        
        <h2 className='sidebarRow_title'>{title}</h2>
    </div>
  )
}

export default SidebarRow