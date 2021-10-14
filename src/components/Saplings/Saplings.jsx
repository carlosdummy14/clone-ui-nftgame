import React from 'react'

import saplingMiniIcon from '../../assets/sapling-mini.svg'
import exchangeIcon from '../../assets/exchange.svg'
import './Saplings.scss'

const Saplings = ({qty = 0}) => {
  return (
    <div className="saplings">
      <div className="saplins-shadow">
        <div className="saplings-counter">
          <img alt="saplings" className="sapling-img" src={saplingMiniIcon} />
          <span className="sapling-text">{qty}</span>
        </div>
        <div className="sapling-change">
          <img alt="saplin change" src={exchangeIcon} />
        </div>
      </div>
    </div>
  )
}

export default Saplings
