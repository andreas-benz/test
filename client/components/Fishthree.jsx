import React, { useState } from 'react'


function Fishthree() {

    const randomDuration = () => `${Math.floor(Math.random() * 40) + 3}s`

    const randomBottom = () => `${Math.floor(Math.random() * 75) + 0}%`

    const randomDelay= () => `${(Math.floor(Math.random() * 40) + 1) * -1}s`

    const style = {
        animationDuration: randomDuration(),
        bottom: randomBottom(),
        animationDelay: randomDelay(),
    }

    return (
      <>
        <a href="https://en.wikipedia.org/wiki/Amphiprioninae" target="_blank"><img style = {style} src="images/fish_3.png" className="fish" id="fish3" width="200"/></a>
      </>
      )
}

export default Fishthree