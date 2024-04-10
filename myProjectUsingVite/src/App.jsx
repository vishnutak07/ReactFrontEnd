import { useState } from 'react'

import './App.css'
import Button from './Component/ButtonProject'
import PasswordProject from './Component/PasswordProject';
import HomePage from './Component/CurrencyChange/HomePage';

const changeColor = (colorName="white")=>{
  document.body.style.backgroundColor = colorName;
}

function App() {
  

  return (
    <>
       {/* <Button changeColor = {changeColor} /> */}
       {/* <PasswordProject/> */}
       <HomePage/>
    </>
  )
}

export default App
