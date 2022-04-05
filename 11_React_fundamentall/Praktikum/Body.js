import React from 'react'
import Header from './Header/Header'
import Getdua from './Getdua'
import Todolist  from './Todo/Todolist'

export default function Body() {

  return (
    <div>
        <Header/>
        {/* <Getdua/> */}
        <Todolist/>
    </div>
  )
}
