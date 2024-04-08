import { useState } from 'react'

import './App.css'
import Button from './Component/Button'

const changeColor = (colorName="white")=>{
  document.body.style.backgroundColor = colorName;
}

function App() {
  

  return (
    <>
       <Button changeColor = {changeColor} />
    </>
  )
}

export default App
