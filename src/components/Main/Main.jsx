import React from 'react'

import './Main.scss'
import MainHeader from '../MainHeader/MainHeader'
import PlantItem from '../PlantItem/PlantItem'

const Main = () => {
  return (
    <div className="main-container">
      <MainHeader />
      <div className="plants-container">
        <PlantItem plant="mama" />
        <PlantItem plant="saplin" />
        <PlantItem plant="saplin" />
        <PlantItem plant="saplin" />
        <PlantItem plant="saplin" />
        <PlantItem plant="saplin" />
        <PlantItem plant="none" />
      </div>
    </div>
  )
}

export default Main
