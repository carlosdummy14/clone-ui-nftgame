import dashboardIconActive from '../assets/dashboard-active.svg'
import dashboardIconInactive from '../assets/dashboard-inactive.svg'
import marketIconActive from '../assets/market-active.svg'
import marketIconInactive from '../assets/market-inactive.svg'
import farmIconActive from '../assets/farm-active.svg'
import farmIconInactive from '../assets/farm-inactive.svg'
import offeringIconActive from '../assets/offering-active.svg'
import offeringIconInactive from '../assets/offering-inactive.svg'
import accountIconActive from '../assets/account-active.svg'
import accountIconInactive from '../assets/account-inactive.svg'
import smallPotIcon from '../assets/small pot.png'
import bigPotIcon from '../assets/big pot.png'
import waterIcon from '../assets/water.png'
import scareCrowIcon from '../assets/scarecrow.png'
import greenHouseIcon from '../assets/greenhouse.png'
import shopIcon from '../assets/shop.png'
import shopText from '../assets/Shoptext.png'
import assetsIcon from '../assets/assets.png'
import assetsText from '../assets/Assetstext.png'
import worldtreeIcon from '../assets/world-tree.png'
import worldtreeText from '../assets/WorldTreetext.png'

export const MENU_OPTION = [
  {
    text: 'Dashboard',
    iconInactive: dashboardIconInactive,
    iconActive: dashboardIconActive
  },
  {
    text: 'Marketplace',
    iconInactive: marketIconInactive,
    iconActive: marketIconActive
  },
  {
    text: 'Farm',
    iconInactive: farmIconInactive,
    iconActive: farmIconActive
  },
  {
    text: 'New Offering',
    iconInactive: offeringIconInactive,
    iconActive: offeringIconActive
  },
  {
    text: 'My Account',
    iconInactive: accountIconInactive,
    iconActive: accountIconActive
  }
]

export const TOOL_ICON = {
  smallpot: smallPotIcon,
  bigpot: bigPotIcon,
  water: waterIcon,
  scarecrow: scareCrowIcon,
  greenhouse: greenHouseIcon
}

export const SIDEFOOTER_ICON = {
  shopIcon,
  shopText,
  assetsIcon,
  assetsText,
  worldtreeIcon,
  worldtreeText
}
