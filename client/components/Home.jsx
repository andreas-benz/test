import React, { useState } from 'react'
import Fishone from './Fishone'
import Fishtwo from './Fishtwo'
import Fishthree from './Fishthree'

function Home () {  
  const [formData, setFormData] = useState({
    fish1: 10,
    fish2: 10,
    fish3: 10,
  })

  const handleChange = (e) => {
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

  const newArr1 = Array.from({ length: length1 }, () => <Fishone />)
  const newArr2 = Array.from({ length: length2 }, () => <Fishtwo />)
  const newArr3 = Array.from({ length: length3 }, () => <Fishthree />)

  return (
  <>
    {newArr1}
    {newArr2}
    {newArr3}

    <h1>Under the Sea</h1>

    <form onSubmit={handleSubmit}>
        <label className = "label" htmlFor = 'fishList'><img src="/images/fish_1.png" width="50" height="50"/>       </label>
        <input className = "input" id='fishList' name='fish1' type='number' value={formData.fish1} onChange ={handleChange}/>
          <br/>
        <label className = "label" htmlFor = 'fishList2'><img src="/images/fish_2.png" width="50" height="50"/>      </label>
        <input className = "input" id='fishList2' name='fish2' type='number' value={formData.fish2} onChange ={handleChange}/>
          <br/>
        <label className = "label" htmlFor = 'fishList3'><img src="/images/fish_3.png" width="50" height="50"/>      </label>
        <input className = "input" id='fishList3' name='fish3' type='number' value={formData.fish3} onChange ={handleChange}/>
    </form>

    <audio controls autoPlay>
      <source src="Acquarium_music.mp3" />
    </audio>
  </>
  )
}

export default Home