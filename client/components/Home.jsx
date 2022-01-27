import React, { useState } from 'react'

function Home () {  
  const [formData, setFormData] = useState({
    fish: ''
  })

  const handleChange = (e) => {
    console.log(e.target.value)
    setFormData(e.target.value)
  }


  return (
  <>
  <img src="images/fish_1.png" className="fish" id="fish1" width="200"/>
  {/* <img src="images/fish_2.png" className="fish" alt="fish2" width="200"/>
  <img src="images/fish_3.png" className="fish" alt="fish3" width="200"/> */}
  <form >
    <label htmlFor = 'fishList'>Fish:</label>
    <input id='fishList' name='fishNumber' type='number' value={formData} onChange ={handleChange}/>
  </form>


  </>
    

  )
}

export default Home