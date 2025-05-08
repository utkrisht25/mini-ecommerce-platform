import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid min-h-screen place-items-center">
      <div className="bg-green-500 p-8 rounded-xl">
        <h1 className="text-white text-3xl font-black ">
          Tailwind v4 is working!
        </h1>
      </div>
    </div>
    </>
  )
}

export default App
