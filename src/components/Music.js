import React from "react";
function Music(props) {
  
  console.log(props,'menu aaa')
    return (
      <div className="Display">
        <div className="LeftPane">
            {props.Menu.map((item)=>{
              return <div key={item[0]} className={(item[1]===1)?'active':'inactive'}>
                  <p>{item[0]}</p>
              </div>
            })}
        </div>
        <div className="RightPane"></div>
      </div>
    );
  }
export default Music;