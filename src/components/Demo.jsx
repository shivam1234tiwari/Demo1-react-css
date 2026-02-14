function Person (){ 
  const person={
    name:'ajay',
    age:'23',
    gmail:'ajay@gmail.com',
    pincode:411057
  }
return (
  <>
  <div>
    <h1>name :{person.name}</h1>
    <h2>age:{person.age}</h2>
    <h3>gmail :{person.gmail}</h3>
    <h2>pincode:{person.pincode}</h2>
  </div>
  </>
)
}
export default Person;