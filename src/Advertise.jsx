import "./Advertise.css";
import Useradvertisebox from "./Useradvertisebox";
import data from "../advertise.json";
function Advertise() {
let arrayOfAdvertise = data.results;
    return (
      <div id="advertise-container">
        <div id="advertise-tittle">Let Us Build Your Business</div>
        <div id="advertise-description">Reach millions of buyers, sellers and renters on the largest real estate network on the web.</div>
        <div id="getstart-description">Select your industry to get started</div>
        <div id="usertype-container">
           {arrayOfAdvertise.map((element,index)=><Useradvertisebox data={element} key={index}/>)}
        </div>
      </div>
    );
  }
  export default Advertise;