import React from 'react'
const Button = () => {

    const handleClick = () => {
        alert("You Clicked!");
    }
    return (
        <button onClick={handleClick}>Click me</button>
    )
}

const Copy = () => {

    const handleCopy = () => {
        alert("You are copying my content(YES I AM)");
        
    } 
    return (
        <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus modi nemo aperiam dolorum molestias suscipit rerum sunt voluptas aliquid quasi blanditiis veniam totam laborum, aliquam repellat nobis maxime officia tempora.</p>
    )
}

const MouseMove = () => {

    const handleMouse = () => {
        console.log("you hovered!");
    }
    return (
        <p onMouseMove={handleMouse}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus modi nemo aperiam dolorum molestias suscipit rerum sunt voluptas aliquid quasi blanditiis veniam totam laborum, aliquam repellat nobis maxime officia tempora.</p>
    )
}


const event = () => {
  return (
    <>
      <Button />
      <Copy />
      <MouseMove />
    </>
  )
}

export default event
