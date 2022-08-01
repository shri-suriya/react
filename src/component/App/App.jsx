import React from 'react'

import Navbar from '../Navbar/Navbar'

import Section from '../Section/Section'

import Search from '../Search bar/Search'

//const clickHandle = event => {
  //event.preventDefault()
//}
//clickHandle();

function App() {
  return (
    <div>

      <Navbar />
      <Search/>
      <Section/>

    </div>

  )
}

export default App