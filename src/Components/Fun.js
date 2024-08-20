// import React,{useState} from 'react'

// const Fun = () => {
//     const [wcolor,setColor]=useState('violet');
//     // const data=1000;
//     function increment(){
//         setColor('green')
//     }
//   return (
//     // <div>
//     //     <p style={{color:wcolor}}>Hello</p>
//     //     <button onClick={increment}>Hello</button>
//     // </div>
//   )
// }

// export default Fun
import React from 'react'

const Fun = (props) => {
  return (
    <div>{props.nabbe}</div>
  )
}

export default Fun