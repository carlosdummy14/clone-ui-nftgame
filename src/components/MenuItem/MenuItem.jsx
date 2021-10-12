import React, {useState} from 'react'

import MENU_OPTION from '../../utils/menu-option'
import './MenuItem.scss'

const MenuItem = ({option}) => {
  const [active, setActive] = useState(false)
  const menuOption = MENU_OPTION[option]
  const iconToUse = active ? menuOption.iconActive : menuOption.iconInactive

  const activeHandler = () => {
    setActive(!active)
  }

  return (
    <li className="menu__item" onClick={activeHandler}>
      <a className={`menu__item--anchor ${active && 'active'}`} href="#">
        <img alt={menuOption.text} className="menu__item--img" src={iconToUse} />
        {menuOption.text}
      </a>
      {active ? <div className="line-active" /> : null}
    </li>
  )
}

export default MenuItem
