import React from 'react'

const Person3 = ({name,age,panCard}) => {
    // (age >18)?("you can drive"):("no drive")

  return (
    <div>
    <h1>Name {name}</h1>
    <h3>
        {age>18 ? <h1>drive it</h1> :<h1>not drive</h1>}
    </h3>
    <h1>{panCard ? <h2>open acct</h2>:""}</h1>
    <h2>{panCard && <p>open account</p>}</h2>
    </div>
  )
}

export default Person3
