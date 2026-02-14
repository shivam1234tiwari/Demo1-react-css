import React from "react";
import Person from "./components/Demo";
import Product from "./components/Products";
import Person2 from "./components/Person2";
import Person3 from "./components/Person3";
import Laptop from "./components/Laptop";
import './App.css'
const App = () => {
  return (
    <>
      <div>
        {/* <Person /> */}
        {/* <Product title="iphone" model="iphone" price={45000}rom="128 GB"/>
       <Product title="iphone-15" model="iphone-15" price={55000} />
        <Product title="apple" model="apple" price={155000} /> */}
      </div>
      <div>
      {/* <Person2 name="rahul" age="23" salary={50000}/>
        <Person2 name="ajay" age="26" salary={30000}/>
          <Person2 name="vijay" age="22" salary={20000} ram="ram"/> */}
    </div>
    <div>
      {/* <Person3 name="vijay" age={20} panCard={true}/> */}
    </div>
    <div>
      <Laptop brandName="hp"model="probook"price={15000}/>
       <Laptop brandName="asus"model="asus"price={15000}/>
        <Laptop brandName="dell"model="dell"price={15000}/>
    </div>
    </>
  );
};
export default App;
