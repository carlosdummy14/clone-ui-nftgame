import React from 'react'

import {SIDEFOOTER_ICON} from '../../utils'
import './SidebarFooter.scss'

const SidebarFooter = () => {
  return (
    <div className="sidebarfooter-container">
      <button className="sidebarfooter--item">
        <img alt="shop" className="item--icon" src={SIDEFOOTER_ICON.shopIcon} />
        <img alt="shoptext" className="item--text" src={SIDEFOOTER_ICON.shopText} />
      </button>
      <button className="sidebarfooter--item">
        <img alt="assets" className="item--icon" src={SIDEFOOTER_ICON.assetsIcon} />
        <img alt="assetstext" className="item--text" src={SIDEFOOTER_ICON.assetsText} />
      </button>
      <button className="sidebarfooter--item">
        <img alt="worldtree" className="item--icon" src={SIDEFOOTER_ICON.worldtreeIcon} />
        <img alt="worldtreetext" className="item--text" src={SIDEFOOTER_ICON.worldtreeText} />
      </button>
    </div>
  )
}

export default SidebarFooter
