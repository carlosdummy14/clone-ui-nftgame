import React from 'react'

import lecounterIcon from '../../assets/lecounter.svg'
import exchangeIcon from '../../assets/exchange.svg'
import './LECounter.scss'

const LECounter = ({qty = 0}) => {
  return (
    <div className="lecounter">
      <div className="lecounter-shadow">
        <div className="lecounter-counter">
          <img alt="le" className="lecounter-img" src={lecounterIcon} />
          <span className="lecounter-text">{qty}</span>
        </div>
        <div className="lecounter-change">
          <img alt="le change" src={exchangeIcon} />
        </div>
      </div>
    </div>
  )
}

export default LECounter
