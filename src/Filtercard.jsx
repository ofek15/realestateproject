import { useState } from "react";
import "./Filtercard.css";
function Filtercard({ array, setArrayOfProducts, savearray }) {
  const [countAndType, setCountAndType] = useState({ count: null, type: null });
  array=[...savearray];
  
  function setTypeFunc(newvalueoftype) {
    const tempCountAndType = { ...countAndType, type: newvalueoftype }; //we need the temporary countandtypeobject becuase the computer skip the set function beacuse of defauly async
    setCountAndType((prevObject) => ({ ...prevObject, type: newvalueoftype }));
    if (tempCountAndType.count != null && tempCountAndType.type != null) {
      let newarray = array.filter(
        (element) => element[tempCountAndType.type] == tempCountAndType.count
      );
      setArrayOfProducts(newarray);
    }
  }

  function setCountFunc(newvalueofcount) {
    const tempCountAndType = { ...countAndType, count: newvalueofcount };
    setCountAndType((prevObject) => ({...prevObject,count: newvalueofcount,}));
    if (tempCountAndType.count != null && tempCountAndType.type != null) {
      let newarray = array.filter(
        (element) => element[tempCountAndType.type] == tempCountAndType.count
      );
      setArrayOfProducts(newarray);
    }
  }

  return (
    <div id="filter-card-container">
      <select id="bathorbed-btn" className="filtercard-btn" defaultValue={'0'} onChange={(e) => setTypeFunc(e.target.value)}>
        <option value="0" selected disabled hidden>bed/bath</option>
        <option value="bathrooms">bathrooms</option>
        <option value="bedrooms">bedrooms</option>
      </select>
      <select id="count-btn" className="filtercard-btn" defaultValue={'0'} onChange={(e) => setCountFunc(e.target.value)}>
        <option value="0" selected disabled hidden>how many</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
export default Filtercard;
