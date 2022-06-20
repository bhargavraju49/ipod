import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";
class Case extends React.Component {

  constructor(){
    super();
    this.state = {
      Menu : [['IPOD.JS',0],['COVER FLOW',1],['MUSIC',0],['GAMES',0],['SETTINGS',0]],
      display : 'Home',
      Music:[['Music',0],['ALL Songs',1],['Artists',0],['Albums',0],['PlayLists',0]],
      mpage:false
    }
  }
  up = (menu)=>{
    console.log(menu,'iiiiiiiiiiiippppppppppppppp')
    // let menu = this.state.Menu
    for (let i=0 ; i <menu.length; i++) {
      if (menu[i][1] === 1){
        //console.log(i)
        menu[i][1] = 0
        if (i!==1){
          menu[i-1][1] = 1
        }
        else {
          //console.log(menu,menu.length)
          menu[menu.length - 1][1] = 1
        }
        break
      }
    }
    if (menu[0][0]=='IPOD.JS')
    {this.setState({
      Menu:menu
    })}
    else{
      this.setState({
        Music:menu
      })
    }

  }

  down = (menu)=>{
    // //console.log('uppp')
    // let menu = this.state.Menu
    for (let i=0 ; i <menu.length; i++) {
      if (menu[i][1] === 1){
        //console.log(i)
        menu[i][1] = 0
        if (i!==menu.length-1){
          menu[i+1][1] = 1
        }
        else {
          // //console.log(menu,menu.length)
          menu[1][1] = 1
        }
        break
      }
    }

    if (menu[0][0]=='IPOD.JS')
    {this.setState({
      Menu:menu
    })}
    else{
      this.setState({
        Music:menu
      })
    }

  }


  homemenu = ()=>{
    this.setState({
      display:'Home',
      mpage:false
    })
  }


  set = () => {
    //console.log('assa')
    let menu = this.state.Menu
    let display = ''
    for (let i=0 ; i <menu.length; i++) {
      if (menu[i][1] === 1){
        //console.log(menu[i][0])
        display = menu[i][0]
        break
      }
  }
  if (display==='MUSIC'){
    console.log(display,'main')
    this.setState({
      display:display,
      mpage:true
    })
  }
  else{
    console.log(display,'else')
    this.setState({
      display:display
    })
  }

}

  render(){
    const {Menu, display , Music, mpage} = this.state
    return (
    
      <div style={style}>
          {/* <div style={{margin:0}}></div> */}
        <Display
           Menu = {Menu}
           display = {display}
           Music = {Music}
           >
        </Display>
        <Keypad Menu = {Menu}  
        up = {this.up} 
        down = {this.down} 
        set = {this.set} 
        music = {Music}
        homemenu={this.homemenu}
        mpage={mpage}
        ></Keypad>
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
