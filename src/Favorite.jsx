import { useContext } from "react";
import { favorite1context } from "./App";
import Cardoffavorite from "./Cardoffavorite";
import './Homepage.css';
function Favorite(){
   const {arrayOfFavorite , setArrayOfFavorite}=useContext(favorite1context);
   console.log(arrayOfFavorite)
   return(
      <div id="card-container">
      {arrayOfFavorite.map((element,index) => (
        <Cardoffavorite data={element} key={index}/>
      ))}
     </div>
   )
}
export default Favorite;