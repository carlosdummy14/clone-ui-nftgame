import React from 'react'

import './MainHeader.scss'
import infoIcon from '../../assets/info.svg'
import pvuIcon from '../../assets/pvu-icon.svg'
import addIcon from '../../assets/add.svg'
import filterIcon from '../../assets/filter.svg'
import LECounter from '../LECounter'

const ManiHeader = () => {
  return (
    <header className="main-header">
      <div className="main-header--menu">
        <div className="pvu-side">
          <div className="pvu-info">
            <img alt="info" className="pvu-info--img" src={infoIcon} />
          </div>
          <div className="pvu-counter">
            <img alt="pvu" className="pvu-counter--img" src={pvuIcon} />
            <span className="pvu-counter--qty">10.04</span>
          </div>
          <div className="pvu-add">
            <img alt="addpvu" className="pvu-add--img" src={addIcon} />
          </div>
          <img alt="pvu--filter" className="pvu--filter" src={filterIcon} />
        </div>
        <div className="le-side">
          <button className="btn harvest">Harvest All</button>
          <LECounter qty={300000} />
        </div>
      </div>
      <div className="main-header--message">Max 300000</div>
    </header>
  )
}

export default ManiHeader
