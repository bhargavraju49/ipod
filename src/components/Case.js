import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";
function Case() {
  return (
    
    <div style={style}>
        {/* <div style={{margin:0}}></div> */}
      <Display></Display>
      <Keypad></Keypad>
    </div>
  );
}

const style = {
    height:590,
    width:330,
    backgroundColor: '#9c4141',
    borderRadius:23,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderStyle:"solid",

}
export default Case;
