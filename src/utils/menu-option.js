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

const MENU_OPTION = [
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

export default MENU_OPTION
