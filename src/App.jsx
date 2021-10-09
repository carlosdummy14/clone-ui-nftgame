import React from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
