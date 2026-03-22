import { Button } from './design/atoms/button'
import { Input } from './design/atoms/input'

import './index.css'

function App() {
  return (
    <div className="flex flex-col gap-4 p-6">
     <Button text='presiona para desahogarte'/> 
      <Input text='hola'/> 
   </div>

  )
}

export default App
