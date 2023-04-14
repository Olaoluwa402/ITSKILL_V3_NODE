import React, {useState} from 'react'

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 

//  conditional rendering - ternary
//   return <div>
//    {isLoggedIn ? (<div>
//     {/* <button onClick={()=> setIsLoggedIn(false)}>logout</button> */}
//     <button onClick={()=> setIsLoggedIn((prevState)=>!prevState)}>logout</button>
//     Hello Jane
//     </div>): (<div>
//          <button onClick={()=> setIsLoggedIn((prev)=>!prev)}>login</button>
//         {/* <button onClick={()=> setIsLoggedIn(true)}>login</button> */}
//         Hello Guest
//         </div>)}
//   </div>

  //  conditional rendering - short circuit - &&
  return (<div>
    <button onClick={()=> setIsLoggedIn((prevState)=>!prevState)}>{isLoggedIn ? 'Logout' : 'Login'}</button>
   {
      isLoggedIn && (<div>
      {/* <button onClick={()=> setIsLoggedIn(false)}>logout</button> */}
           Hello Jane
         </div>)
   }
  </div>)

}

export default ConditionalRendering
