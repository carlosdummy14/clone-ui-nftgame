import React, {useState} from 'react'

import logo from '../../assets/logo.svg'
import binanceIcon from '../../assets/binance.svg'
import arrowIcon from '../../assets/arrow.svg'
import binanceWhiteIcon from '../../assets/binance-white.svg'
import website1Icon from '../../assets/website1.svg'
import website2Icon from '../../assets/website2.svg'
import './Header.scss'
import MenuItem from '../MenuItem'

const Header = () => {
  const [binanceactive, setBinanceactive] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <nav className="menu-container">
          <a href="#">
            <img alt="logo" className="logo" src={logo} />
          </a>
          <ul className="list menu">
            <MenuItem option="0" />
            <MenuItem option="1" />
            <MenuItem option="2" />
            <MenuItem option="3" />
          </ul>
        </nav>
        <nav className="menu-container">
          <ul className="list menu">
            <MenuItem option="4" />
            <li className="menu__item" onClick={() => setBinanceactive(!binanceactive)}>
              <a className="menu__item--anchor" href="#">
                <img alt="binance" className="menu__item--img" src={binanceIcon} />
                0x123..123
                <img
                  alt="arrow"
                  className={`${binanceactive ? `binanceactive` : ''}`}
                  src={arrowIcon}
                />
              </a>
              {binanceactive ? (
                <div className="menu-pop">
                  <p>
                    Connect to
                    <span className="line-text">
                      <img alt="binance" src={binanceWhiteIcon} />
                      <div className="space-small" />
                      Binance Smart Chain
                    </span>
                  </p>
                  <p>
                    Wallet address:
                    <span className="line-text">
                      0x1234...abc123abc123a
                      <div className="space-small" />
                      <div className="space-small" />
                      <img alt="website1" src={website1Icon} />
                      <div className="space-small" />
                      <div className="space-small" />
                      <img alt="website2" src={website2Icon} />
                    </span>
                  </p>
                </div>
              ) : null}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
