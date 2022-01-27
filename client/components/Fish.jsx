import React, { useState } from 'react'


function Fish() {

const randomDuration = () => `${Math.floor(Math.random() * 20) + 3}s`

const randomBottom = () => `${Math.floor(Math.random() * 70) + 10}%`

const randomDelay= () => `${(Math.floor(Math.random() * 40) + 1) * -1}s`


    const style = {
        animationDuration: randomDuration(),
        bottom: randomBottom(),
        animationDelay: randomDelay(),
    }

    return (
      <>
      <img style = {style} src="images/fish_1.png" className="fish" id="fish1" width="200"/>
      {/* <img src="images/fish_2.png" className="fish" alt="fish2" width="200"/>
      <img src="images/fish_3.png" className="fish" alt="fish3" width="200"/> */}
     
    
    
      </>
        
    
      )
}

export default Fish