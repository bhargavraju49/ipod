import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";
class Case extends React.Component {

  constructor(){
    super();
    this.state = {
      Menu : [['IPOD.JS',0],['COVER FLOW',1],['MUSIC',0],['GAMES',0],['SETTINGS',0]]
    }
  }
  up = ()=>{
    console.log('uppp')
    let menu = this.state.Menu
    for (let i=0 ; i <menu.length; i++) {
      if (menu[i][1] === 1){
        console.log(i)
        menu[i][1] = 0
        if (i!==1){
          menu[i-1][1] = 1
        }
        else {
          console.log(menu,menu.length)
          menu[menu.length - 1][1] = 1
        }
        break
      }
    }

    this.setState({
      Menu:menu
    })

  }

  down = ()=>{
    // console.log('uppp')
    let menu = this.state.Menu
    for (let i=0 ; i <menu.length; i++) {
      if (menu[i][1] === 1){
        console.log(i)
        menu[i][1] = 0
        if (i!==menu.length-1){
          menu[i+1][1] = 1
        }
        else {
          // console.log(menu,menu.length)
          menu[1][1] = 1
        }
        break
      }
    }

    this.setState({
      Menu:menu
    })

  }



  render(){
    const {Menu} = this.state
    return (
    
      <div style={style}>
          {/* <div style={{margin:0}}></div> */}
        <Display
           Menu = {Menu}
           >
        </Display>
        <Keypad Menu = {Menu}  up = {this.up} down = {this.down}></Keypad>
      </div>
    );
  }

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
