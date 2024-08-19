import { useState } from 'react'
import {About,} from './components/imports.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h2>This is home</h2>
<Link to="/about">
        <button>About</button>
      </Link>
    </>
  )
}

export default App
