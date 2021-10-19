import React from 'react'

import './Sidebar.scss'
import Saplings from '../Saplings/Saplings'
import Tools from '../Tools'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Saplings qty={40} />
      <Tools />
      <div>
        <div>shopping</div>
        <div>assets</div>
        <div>world tree</div>
      </div>
    </div>
  )
}

export default Sidebar
