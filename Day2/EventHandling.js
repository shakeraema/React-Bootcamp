import React from 'react';

function EventHandling() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleCopy = () => {
    console.log('Text copied!');
  };

  const handleMouseMove = () => {
    console.log('Mouse moved!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p onCopy={handleCopy}>Copy this text</p>
      <div onMouseMove={handleMouseMove}>Move mouse here</div>
    </div>
  );
}

export default EventHandling;
