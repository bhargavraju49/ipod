import React from "react";
import '../assets/display.css'
import Home from './Homescreen'
import Cover from './Cover'
import Games from './Games'
import Settings from './Settings'
import Music from './Music'


function Display(props) {
  
  console.log(props.Music)
    return (
      // <Cover></Cover>
      <div>
        {(props.display=='Home')&&<Home Menu = {props.Menu}></Home>}
        {(props.display=='GAMES')&&<Games Menu = {props.Menu}></Games>}
        {(props.display=='SETTINGS')&&<Settings Menu = {props.Menu}></Settings>}
        {(props.display=='COVER FLOW')&&<Cover Menu = {props.Menu}></Cover>}
        {(props.display=='MUSIC')&&<Music Menu = {props.Music} ></Music>}
        
      </div>
    );
  }
export default Display;
