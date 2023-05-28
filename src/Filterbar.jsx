import './Filterbar.css';
import Filtercard from './Filtercard';
import React, { useState } from 'react';
function Filterbar({array,setArrayOfProducts,savearray}){
array=[...savearray];

function sortfunction(value){
    if (value=="1"){
    setArrayOfProducts([...array].sort((a,b)=>a.price-b.price))
    }
    if (value=="2"){
        setArrayOfProducts([...array].sort((a,b)=>b.price-a.price))
        }
    if (value=="3"){
        setArrayOfProducts([...array].sort((a,b)=>a.rentZestimate-b.rentZestimate))
        }
    if (value=="4"){
        setArrayOfProducts([...array].sort((a,b)=>b.rentZestimate-a.rentZestimate))
        }
    
}
function searchFunction(searchvalue){
      searchvalue=searchvalue.toLowerCase()
      setArrayOfProducts(array.filter((element) => element.streetAddress.toLowerCase().includes(searchvalue)));
}
return(
 <div id="filter-bar">
    <input type="text" id="search-input" placeholder='search adress...' onChange={(e)=>searchFunction(e.target.value)}/>
    <select defaultValue={'0'} id="sort-select" onChange={(e)=>sortfunction(e.target.value)}>
    <option value="0" selected disabled hidden>search by price</option>
     <option value="1">price low to high</option>
     <option value="2">price high to low</option>
     <option value="3">rent price low to high</option>
     <option value="4">rent price high to low</option>
    </select>
    <div id="filter-div">filter of properties
    <Filtercard array={array} setArrayOfProducts={setArrayOfProducts} savearray={savearray} />
    </div>
  </div>
    )
}
export default Filterbar; 