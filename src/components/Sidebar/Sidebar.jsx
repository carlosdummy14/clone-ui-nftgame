import React from 'react'

import './Sidebar.scss'
import Saplings from '../Saplings/Saplings'
import Tools from '../Tools'
import SidebarFooter from '../SidebarFooter'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Saplings qty={40} />
      <Tools />
      <SidebarFooter />
    </div>
  )
}

export default Sidebar
