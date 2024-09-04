import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AddFinanciallist from './pages/AddFinanciallist';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddFinanciallist/>
    </>
  )
}

export default App
