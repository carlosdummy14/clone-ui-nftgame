import React from 'react'

import './Tools.scss'
import ToolsItem from '../ToolsItem'

const Tools = () => {
  return (
    <div className="tools-container">
      <div className="tools-title">
        <p>Tools</p>
      </div>
      <ul className="list tools-list">
        <ToolsItem qty={0} type="smallpot" />
        <ToolsItem qty={10} type="bigpot" />
        <ToolsItem qty={100} type="water" />
        <ToolsItem qty={1000} type="scarecrow" />
        <ToolsItem qty={10000} type="greenhouse" />
      </ul>
    </div>
  )
}

export default Tools
