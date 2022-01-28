import React, { useState } from 'react'
import Fishone from './Fishone'
import Fishtwo from './Fishtwo'
import Fishthree from './Fishthree'


function Home () {  
  const [formData, setFormData] = useState({
    fish1: 5,
    fish2: 10,
    fish3: 5
  })

  const handleChange = (e) => {
    //console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const length1 = formData.fish1;
  const length2 = formData.fish2;
  const length3 = formData.fish3;
  console.log(length1)
  console.log(length2)

  // { length: 1 }
  const newArr1 = Array.from({ length: length1 }, () => <Fishone />)
  const newArr2 = Array.from({ length: length2 }, () => <Fishtwo />)
  const newArr3 = Array.from({ length: length3 }, () => <Fishthree />)
  console.log(newArr1)
  console.log(newArr2)
  
  return (
  <>
   <form onSubmit={handleSubmit}>
        <label className = "label" htmlFor = 'fishList'>Fish type 1:</label>
        <input id='fishList' name='fish1' type='number' value={formData.fish1} onChange ={handleChange}/>

        <br/>
        <label className = "label" htmlFor = 'fishList2'>Fish type 2:</label>
        <input id='fishList2' name='fish2' type='number' value={formData.fish2} onChange ={handleChange}/>

        <br/>
        <label className = "label" htmlFor = 'fishList3'>Fish type 3:</label>
        <input id='fishList3' name='fish3' type='number' value={formData.fish3} onChange ={handleChange}/>


  </form>
     {newArr1}
     {newArr2}
     {newArr3}
  </>
  )
}

export default Home