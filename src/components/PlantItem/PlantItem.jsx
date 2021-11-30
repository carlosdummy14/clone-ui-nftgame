import React from 'react'

import './PlantItem.scss'
import saplinIcon from '../../assets/saplin.svg'
import mamaIcon from '../../assets/mama.svg'
import addPlantIcon from '../../assets/add-plant.svg'
import typeLightIcon from '../../assets/plant-light.svg'
import landIcon from '../../assets/land.svg'
import landCoorsIcon from '../../assets/land-coors.svg'
import infoIcon from '../../assets/info.svg'
import smallpotIcon from '../../assets/small pot.png'
import waterIcon from '../../assets/water.png'
import lepalntIcon from '../../assets/le-plant.svg'

const PLANT = {
  mama: mamaIcon,
  saplin: saplinIcon,
  none: addPlantIcon
}

const NoPlant = () => {
  return (
    <div className="plant-item no-plant">
      <img alt="plant" className="plant--plant" src={PLANT['none']} />
    </div>
  )
}

const PlantItem = ({plant = 'none'}) => {
  if (plant == 'none') return <NoPlant />

  return (
    <div className="plant-item">
      <div className="plant-top">
        <div className="plant-container">
          <img alt="land" className="plant--land" src={landIcon} />
          <img alt="plant" className="plant--plant" src={PLANT[plant]} />
          <img alt="coors" className="plant--coors" src={landCoorsIcon} />
          <p className="plant--text">0.0</p>
          <div className="plant--header">
            <div className="plant--type">
              <img alt="type" src={typeLightIcon} />
            </div>
            <div className="plant--le">LE: 1110 / 222 hours</div>
          </div>
        </div>
        <div className="plant-tools">
          <div className="plant-tools--top">
            <div className="plant-tools--top--item">
              <img alt="pot" src={smallpotIcon} />
            </div>
            <div className="plant-tools--top--item">
              <img alt="water" src={waterIcon} />
              <div className="plant-tools--top--item-tip">2</div>
            </div>
          </div>
          <div className="plant-tools--bottom">
            <img alt="info" src={infoIcon} />
          </div>
        </div>
      </div>
      <div className="plant-le">
        <div className="nft-id">#1234567890123</div>
        <div className="le-count">
          <img alt="le" className="le-count--img" src={lepalntIcon} />
          <p className="le-count--text">100</p>
        </div>
      </div>
      <div className="plant-footer">
        <button className="plant-footer--btn">Remove</button>
        <div className="plant-footer--counter">221:25</div>
      </div>
      <div />
    </div>
  )
}

export default PlantItem
