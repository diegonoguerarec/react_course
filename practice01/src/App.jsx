import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import InnerApp from './InnerApp'
import StateManagement from './StateManagement'
import ToggleMessage from './ToggleMessage'

function App() {
  return (
    <>
      <InnerApp name="Diegao" />
      <StateManagement/>
      <ToggleMessage/>
    </>
  )
}

export default App
