// import React from 'react'
// import './Hello.css'

// const Hello = () => {
//   return (
    
//     // <p className='pi'>
//     //   Hello
//     // </p>
//   )
// }
// export default Hello
import React, { useContext } from 'react'
import { ThemeContext } from '../store/ThemeContext'

const Hello = () => {
  const{increment,decrement}=useContext(ThemeContext);
  return (
    <div>
       <button onClick={increment}>increment</button>
       <button onClick={decrement}>decrement</button>
    </div>
  )
}
export default Hello