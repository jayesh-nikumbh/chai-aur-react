import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  let myObj = {
    userName : "jayesh ",
    age: 20
  }

  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="hitesh" btnText="click me"/>
      <Card username="jayesh" />
    </>
  )
}

export default App