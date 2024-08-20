
// import Content from "./Components/Content";
import Bn from"./Components/Bn";
// import Fun from "./Components/Fun";
import React, { useState } from "react";
import { ThemeContext } from "./store/ThemeContext";
function App() {
  
    const[count,setCount]=useState(0);
    function increment(){
     setCount(count+1) 
    }
    function decrement(){
      if(count>0){
        setCount(count-1)
      }
      
    }
  return (
    <div className="App">
      <ThemeContext.Provider value={{count,increment,decrement}}>
        <Bn/>
      </ThemeContext.Provider>
</div> 
     );
}
export default App;
