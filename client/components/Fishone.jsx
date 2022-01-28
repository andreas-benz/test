import React, { useState } from 'react'


function Fishone() {

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
        <a href="https://en.wikipedia.org/wiki/Zebrasoma_xanthurum" target="_blank"><img style = {style} src="images/fish_1.png" className="fish" id="fish1" width="200"/></a>
      </>
      )
}

export default Fishone

