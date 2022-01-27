import React, { useState } from 'react'
import Fish from './Fish'

function Home () {  
  const [formData, setFormData] = useState({
    fish1: 3
  })

  const handleChange = (e) => {
    //console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    })
  }

  // const Random = () => {
  //   return {
  //     borderStyle: solid
  //   }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const length = formData.fish1;
  const newArr = Array.from({length}, () => <Fish/>)
  console.log(newArr)

  return (
  <>
   <form onSubmit={handleSubmit}>
        <label htmlFor = 'fishList'>Fish:</label>
        <input id='fishList' name='fish1' type='number' value={formData.fish1} onChange ={handleChange}/>
  </form>
     {newArr}
  </>
  )
}

export default Home