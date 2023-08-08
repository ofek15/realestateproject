import './Card.css';
import { useContext } from 'react';
import { favorite1context } from './App';
import { useState, useEffect } from 'react';

function Card(props) {
    
   const {arrayOfFavorite , setArrayOfFavorite, countFav, setCountFav}=useContext(favorite1context);

    let bathobj = props.data.bathrooms;
    let badobj = props.data.bedrooms;
    let priceobj = props.data.price;
    let rentobj = props.data.rentZestimate;
    let hometypeobj = props.data.homeType;
    let imglinkobj = props.data.imgSrc;
    let countryobj = props.data.country;
    let stateobj = props.data.state;
    let cityobj = props.data.city;
    let streetAddressobj = props.data.streetAddress;
    let fulladress= `${countryobj},${stateobj},${cityobj},${streetAddressobj}`;
    let zpidobj = props.data.zpid;
    

    function f1(num){
        if(num!=undefined){
        const fixPrice = num.toString().split('');
        if (7 > fixPrice.length && fixPrice.length > 3) {
           fixPrice[fixPrice.length - 4] += ','
        }else{
        if (fixPrice.length > 6) {
           fixPrice[fixPrice.length - 4] += ','
           fixPrice[fixPrice.length - 7] += ','
           };
         }
         return (fixPrice.join(""))
        }else{
            return (num);
        }
     }
    
    let priceinstring = f1(priceobj);
    let rentinstring = f1(rentobj);

    const bigobj ={
        bath1: badobj,
        bad1: badobj,
        price1: priceinstring,
        rent1: rentinstring,
        hometype1: hometypeobj,
        imglink1: imglinkobj,
        country1: countryobj,
        state1: stateobj,
        city1: cityobj,
        streetaddress1: streetAddressobj,
        fulladress1:fulladress,
        zpid1: zpidobj
    }

    return (
        <div id="example">
               <div className="product-img-div"><img className="product-img-img" src={imglinkobj}></img></div>
               <div className="product-description">
                   <div className="Hometype-style">{hometypeobj}</div>
                   <div className="Address-style">{countryobj},{stateobj},{cityobj},{streetAddressobj}
                    <a href={`https://www.google.com/maps/place/${fulladress}`} target="_blank"> <i className="fa fa-map-marker" id='location-icon' ></i> </a>
                    </div>
                   <div className="Bath-style">  baths:{bathobj} <img className='icon8' src="https://img.icons8.com/ios-filled/50/40C057/shower-and-tub.png" alt="shower-and-tub"/>, bedrooms:{badobj} <img className='icon8' src="https://img.icons8.com/ios-filled/50/40C057/bed.png" alt="bed"/></div>
                   <div className="Price-style"> Price:{priceinstring} $, Rent:{rentinstring} $</div>
                   <button className="saveproperty-btn" onClick={()=>pushIntoFav()}> <i className={`fa fa-heart${isCardInFav()?' heart-icon-second':' heart-icon-first'}`}></i>  Save property</button>
               </div>
        </div>
    );
function pushIntoFav(){
    let check=true;
    for (let i=0; i<arrayOfFavorite.length;i++){
        if (arrayOfFavorite[i].zpid1==bigobj.zpid1){
             setCountFav(countFav-1)
             check=false;
             setArrayOfFavorite(arrayOfFavorite.filter((v,index) => index !== i))
             
        }
    }
    if (check==true){
        setCountFav(countFav+1)
        setArrayOfFavorite((prevfavarray)=>([...prevfavarray,bigobj]));console.log(arrayOfFavorite)
    }
 }
 function isCardInFav(){
    const cardifavboolean = arrayOfFavorite.some((Element)=>{ return (Element.zpid1== zpidobj)})
    return cardifavboolean;
 }

}    
export default Card;