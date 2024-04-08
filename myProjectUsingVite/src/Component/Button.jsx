import { useState } from 'react'

function Button({changeColor}) {


  return (
    <>
       <button type="button" onClick = {()=>{changeColor("blue")}} className="btn btn-primary">Primary</button>
        <button type="button" onClick = {()=>{changeColor("broun")}} className="btn btn-secondary">Secondary</button>
        <button type="button" onClick = {()=>{changeColor("green")}} className="btn btn-success">Success</button>
        <button type="button" onClick = {()=>{changeColor("red")}} className="btn btn-danger">Danger</button>
        <button type="button" onClick = {()=>{changeColor("yellow")}} className="btn btn-warning">Warning</button>
        <button type="button" onClick = {()=>{changeColor("blue")}} className="btn btn-info">Info</button>
        <button type="button" onClick = {()=>{changeColor("white")}} className="btn btn-light">Light</button>
        <button type="button" onClick = {()=>{changeColor("blue")}} className="btn btn-dark">Dark</button>
    </>
  )
}

export default Button
