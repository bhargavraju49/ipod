import React from "react";

function Keypad() {
  return (
    <div style={style}>
      <div style={stylei}></div>
    </div>
  );
}

const style = {
    height:220,
    width:220,
    backgroundColor: '#d8dced',
    borderRadius:110,
    margin:'auto',
    display:'flex',
    justifyContent: 'center'
    
}

const stylei = {
    height:100,
    width:100,
    backgroundColor: '#9c4141',
    borderRadius:50,
    margin:'auto'
    
}

export default Keypad;
