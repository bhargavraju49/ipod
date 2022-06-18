import React from "react";
import "../assets/keypad.css";

import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { GrCirclePlay } from "react-icons/gr";
import { MdMenu } from "react-icons/md";


function Keypad() {
  return (
    <div className="Keypad">
      <div className="Menu">
        <div>
            <MdMenu size={30} />
        </div>
      </div> 
      <div className="Midblock">
        <div className="prev">
          <div>
            <BiSkipPrevious size={40} />
          </div>
        </div>
        <div className="Ball"></div>
        <div className="next">
            <div>
            <BiSkipNext size={40} />
            </div>
        </div>
      </div>
      <div className="pauseplay">
        <div>
          <GrCirclePlay size={30} />
        </div>
      </div>
    </div>
  );
}

export default Keypad;
