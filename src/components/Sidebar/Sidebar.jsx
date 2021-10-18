import React from 'react'

import './Sidebar.scss'
import Saplings from '../Saplings/Saplings'
import smallPotIcon from '../../assets/small pot.png'
import bigPotIcon from '../../assets/big pot.png'
import waterIcon from '../../assets/water.png'
import scareCrowIcon from '../../assets/scarecrow.png'
import greenHouseIcon from '../../assets/greenhouse.png'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Saplings qty={40} />
      <div className="tools-container">
        <div className="tools-title">
          <p>Tools</p>
        </div>
        <ul className="list tools-list">
          <li className="tools-item">
            <div className="img-container">
              <img alt="smallpot" className="item--img" src={smallPotIcon} />
              <div className="item--qty">1</div>
            </div>
            <button className="item--button">Use</button>
          </li>
          <li className="tools-item">
            <div className="img-container">
              <img alt="bigpot" className="item--img" src={bigPotIcon} />
              <div className="item--qty">10</div>
            </div>
            <button className="item--button">Use</button>
          </li>
          <li className="tools-item">
            <div className="img-container">
              <img alt="water" className="item--img" src={waterIcon} />
              <div className="item--qty">100</div>
            </div>
            <button className="item--button item--use">Use x 2</button>
          </li>
          <li className="tools-item">
            <div className="img-container">
              <img alt="scarecrow" className="item--img" src={scareCrowIcon} />
              <div className="item--qty">1000</div>
            </div>
            <button className="item--button">Use</button>
          </li>
          <li className="tools-item">
            <div className="img-container">
              <img alt="greenhouse" className="item--img" src={greenHouseIcon} />
              <div className="item--qty">10000</div>
            </div>
            <button className="item--button">Use</button>
          </li>
        </ul>
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
