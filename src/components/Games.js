import React from "react";
import {SiEpicgames} from 'react-icons/si'
function Games(props) {
  
  console.log(props)
    return (
        <div className="Display">
            <div className="cover">
                <SiEpicgames size={100}/>
                <p>Games</p>
            </div>
      </div>

    );
  }
export default Games;
