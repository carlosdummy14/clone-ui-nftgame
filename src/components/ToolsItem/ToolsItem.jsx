import React from 'react'

import {TOOL_ICON} from '../../utils'
import './ToolsItem.scss'

const ToolsItem = ({qty, type}) => {
  return (
    <li className="tools-item">
      <div className="img-container">
        <img alt={type} className="item--img" src={TOOL_ICON[type]} />
        <div className="item--qty">{qty}</div>
      </div>
      <button className={`item--button ${qty > 0 ? 'item--use' : ''}`}>
        {type === 'water' ? 'Use x2' : 'Use'}
      </button>
    </li>
  )
}

export default ToolsItem
