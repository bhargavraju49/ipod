import React from "react";
function Home(props) {
  
  console.log(props)
    return (
      <div className="Display">
        <div className="LeftPane">
            {props.Menu.map((item)=>{
              return <div key={item[0]} className={(item[1]===1)?'active':'inactive'}>
                  <p>{item[0]}</p>
              </div>
            })}
        </div>
        <div className="RightPane">
          <img  src="https://i.pinimg.com/474x/4e/42/0f/4e420f062057cfed87e1797f3a205f64.jpg"></img>
        </div>
      </div>
    );
  }

export default Home;
