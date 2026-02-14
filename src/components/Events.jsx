import React from 'react'

const Events = () => {
    const handleClick=()=>{
        alert('Click the button')
    }
    const addition=(a)=>{
        alert(a+10)
    }
  return (
    <div>
      <h1>We are learning Events</h1>
      <button onClick={handleClick}>click button</button>
      <button onClick={()=>addition(10)}>button1</button>
    </div>
  )
}

export default Events
