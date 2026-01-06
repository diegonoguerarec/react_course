import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import InnerApp from './InnerApp'
import StateManagement from './StateManagement'

function App() {
  return (
    <>
      <InnerApp name="Diegao" />
      <StateManagement/>
    </>
  )
}

export default App
