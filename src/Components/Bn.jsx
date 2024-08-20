// import React from 'react'

// const Bn = () => {
//   return (
//     // <div style={{backgroundColor:"gray",height:"300px",}}>Bn</div>
//   )
// }

// export default Bn
// import React from 'react'

// const Bn = (props) => {
//   return (
//     <div>{props.nav}</div>
//   )
// }

// export default Bn
import React, { useContext } from 'react'
import { ThemeContext } from '../store/ThemeContext'
import Hello from './Hello';
const Bn = () => {
  const{count}=useContext(ThemeContext);
  return (
    <div>
      {count}
      <Hello/>
    </div>
  )
}

export default Bn