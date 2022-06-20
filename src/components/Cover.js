import React from "react";
import {VscDebugCoverage} from 'react-icons/vsc'
function Cover(props) {
  
  console.log(props)
    return (
        <div className="Display">
            <div className="cover">
                <VscDebugCoverage size={100}/>
                <p>Cover</p>
            </div>
      </div>

    );
  }
export default Cover;
