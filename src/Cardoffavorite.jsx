import './Card.css';
function Cardoffavorite(props){
    console.log(props.data.streetAddress1)
    return(
        <div id="example">
        <div className="product-img-div"><img className="product-img-img" src={props.data.imglink1}></img></div>
        <div className="product-description">
            <div className="Hometype-style">{props.data.hometype1}</div>
            <div className="Address-style">{props.data.country1},{props.data.state1},{props.data.city1},{props.data.streetaddress1}
             <a href={`https://www.google.com/maps/place/${props.data.fulladress1}`} target="_blank"> <i className="fa fa-map-marker" id='location-icon' ></i> </a>
             </div>
            <div className="Bath-style">  baths:{props.data.bath1} <img className='icon8' src="https://img.icons8.com/ios-filled/50/40C057/shower-and-tub.png" alt="shower-and-tub"/>, bedrooms:{props.data.bad1} <img className='icon8' src="https://img.icons8.com/ios-filled/50/40C057/bed.png" alt="bed"/></div>
            <div className="Price-style"> Price:{props.data.price1} $, Rent:{props.data.rent1} $</div>
        </div>
        </div>
    )
    
}
export default Cardoffavorite;
