import "./Useradvertisebox.css"
function Useradvertisebox(props){
    let sentence1=props.data.sentence;
    let url1=props.data.imgsrc1;
    console.log(url1);
    return(
       <div id="Useradvertise">
         <div id="advertise-img-div"><img id="advertise-img-img" src={url1}></img></div>
         <div id="advertise-description">
            <h2 id="h2-advertise">{sentence1}</h2>
            <button id="getstart-btn">get started</button>
         </div>
       </div>
    )
}
export default Useradvertisebox;