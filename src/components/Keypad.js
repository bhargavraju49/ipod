import React from "react";
import "../assets/keypad.css";

// import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { GrCirclePlay } from "react-icons/gr";
import { MdMenu } from "react-icons/md";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";


function Keypad(props) {

  return (
    <div className="parentkeypad">
      <div className="Keypad" onDrag={()=>{console.log('hi')}}>
      <div className="Menu">
        <div>
            <MdMenu size={30} />
        </div>
      </div> 
      <div className="Midblock">
        <div className="prev" onClick={props.up}>
          <div>
            <FiChevronUp size={40} />
          </div>
        </div>
        <div className="Ball" onClick={(event)=>{console.log('ball');event.stopPropagation()}}></div>
        <div className="next"  onClick={props.down}>
            <div>
            <FiChevronDown size={40} />
            </div>
        </div>
      </div>
      <div className="pauseplay" onClick={(event)=>{console.log('hi');event.stopPropagation()}} >
        <div>
          <GrCirclePlay size={30} />
        </div>
      </div>
      {/* <div id="output"> Interaction meta will output here.</div> */}
    </div>
    </div>
  );
}


// let childElement = document.getElementsByClassName('Keypad');
// activeRegion.bind(childElement, 'pan', function(event){
// 	//Perform Operations
//   counter++;
//   document.getElementById('output').innerHTML = 
//     "Input currently panned: " + counter + " times";
// });


export default Keypad;
