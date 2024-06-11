import { useState } from 'react'
import {Home} from './sections/Home'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full fixed top-0'>
      <div className='absolute top-0 left-0 w-full'>
        <Home/>

      </div>
    </div>
  )
}
