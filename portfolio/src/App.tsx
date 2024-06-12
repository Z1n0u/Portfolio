import { useState } from 'react'
import {Home} from './sections/Home'
import Navbar from './Compenents/Navbar'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='w-full h-full fixed top-0'>
        <div className='absolute top-0 left-0 w-full'>
          
          <Home/>

        </div>
      </div>
    </>
  )
}
