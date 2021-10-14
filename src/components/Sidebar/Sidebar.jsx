import React from 'react'

import './Sidebar.scss'
import Saplings from '../Saplings/Saplings'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Saplings qty={40} />
      <div>
        <h4>Tools</h4>
        <div>small</div>
        <div>big</div>
        <div>wather</div>
        <div>crow</div>
        <div>home</div>
      </div>
      <div>
        <div>shopping</div>
        <div>assets</div>
        <div>world tree</div>
      </div>
    </div>
  )
}

export default Sidebar
