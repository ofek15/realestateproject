import { Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Aboutpage from "./Aboutpage";
import Nomatchpage from "./Nomatchpage";
import Advertise from "./Advertise";
import Favorite from "./Favorite";
import './App.css'
import Contactus from "./Contactus";
import { Context, useState, createContext} from "react";

export const favorite1context = createContext();


function App() {
  const [arrayOfFavorite, setArrayOfFavorite] = useState ([]);
  const [countFav, setCountFav]= useState(0);
  return(
  <favorite1context.Provider value={{arrayOfFavorite , setArrayOfFavorite, countFav, setCountFav}}>
  <Routes>
  <Route path="/" element={<Navbar />}>
    <Route index element={<Homepage />}/>
    <Route path="/about" element={<Aboutpage />}/>
    <Route path="/Advertise" element={<Advertise />}/>
    <Route path="/Contactus" element={<Contactus />}/>
    <Route path="/Favorite" element={<Favorite />}/>
    <Route path="*" element={<Nomatchpage />} />
  </Route>
 </Routes>
 </favorite1context.Provider>
  )
}
export default App
