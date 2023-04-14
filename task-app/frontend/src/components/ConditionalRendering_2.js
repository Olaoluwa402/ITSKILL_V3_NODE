import React, {useState} from 'react'

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


//   const loginState_2 = isLoggedIn ? (<div>
//    {/* <button onClick={()=> setIsLoggedIn(false)}>logout</button> */}
//    <button onClick={()=> setIsLoggedIn((prevState)=>!prevState)}>logout</button>
//    Hello Jane
//    </div>): (<div>
//       {/* <button onClick={()=> setIsLoggedIn(false)}>logout</button> */}
//       <button onClick={()=> setIsLoggedIn((prevState)=>!prevState)}>login</button>
//       Hello Guest
//       </div>)


let loginState;

if(isLoggedIn){
    loginState =  (<div>
      {/* <button onClick={()=> setIsLoggedIn(false)}>logout</button> */}
      <button onClick={()=> setIsLoggedIn((prevState)=>!prevState)}>logout</button>
      Hello Jane
      </div>)
}else{
   loginState =  (<div>
      {/* <button onClick={()=> setIsLoggedIn(false)}>logout</button> */}
      <button onClick={()=> setIsLoggedIn((prevState)=>!prevState)}>login</button>
      Hello Guest
      </div>)
}
//  conditional rendering - declarinng variables
   return loginState

}

export default ConditionalRendering
