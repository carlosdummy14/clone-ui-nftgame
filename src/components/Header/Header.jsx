import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <>
      <img alt="logo" src="" />
      <nav>
        <ul className="list">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Farm</a>
          </li>
          <li>
            <a href="#">New Offering</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="list">
          <li>
            <a href="#">My Acoount</a>
          </li>
          <li>
            <span>0x123..123</span>
            <span>{'>'}</span>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
