import React from "react";

const Laptop = ({ brandName, model, price }) => {
    // const obj={
    //     // internal styling
    //     backgroundColor:'blue',
    //      color: "white",
    //     padding: "10px",
    //     margin: "2px",
    //     border:'2px solid grey'
    // }
  return (
    <div
    // inline styling
    //   style={{
    //     background: "grey",
    //     color: "white",
    //     padding: "10px",
    //     margin: "2px",
    //     borderRadius:'2px'
    //   }}
    // style={obj}
    className="div"
    >
      <h2>Brandname {brandName}</h2>
      <h2>model {model}</h2>
      <h2>price{price}</h2>
    </div>
  );
};

export default Laptop;
