import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Loadingbar.css'
import Getready from './Getready'
import GetReadyTitle from './GetReadyTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <GetReadyTitle/>
    <Getready/>
    </>
  )
}

export default App
