import React from "react";
import {FcSettings} from 'react-icons/fc'
function Settings(props) {
  
  console.log(props)
    return (
        <div className="Display">
            <div className="cover">
                <FcSettings size={100}/>
                <p>Settings</p>
            </div>
      </div>

    );
  }
export default Settings;
