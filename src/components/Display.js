import React from "react";
import '../assets/display.css'
import Home from './Homescreen'
function Display(props) {
  
  console.log(props)
    return (
      <Home Menu = {props.Menu}></Home>
    );
  }
export default Display;
