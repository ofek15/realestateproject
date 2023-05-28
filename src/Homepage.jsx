import Card from "./Card";
import "./Homepage.css";
import data from "../realestate.json";
import Filterbar from "./Filterbar";
import { useState } from "react";
function Homepage() {
  const [arrayofproducts, setArrayOfProducts] = useState(data.results || []);
  return (  
    <div id="Homepage-container">
     <Filterbar array={arrayofproducts} setArrayOfProducts={setArrayOfProducts} savearray={data.results}/>
     <div id="card-container">
      {arrayofproducts.map((element,index) => (
        <Card data={element} key={index}/>
      ))}
     </div>
    </div>
  );
}
export default Homepage;
