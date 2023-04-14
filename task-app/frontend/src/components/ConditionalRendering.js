import React, {useState} from 'react'

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 const [count, setCount] = useState(0)

 function increment (){
    setCount((prevState)=> prevState + 1)
 }

 function multiple(){
    increment()
    increment()
    increment()
    increment()
    increment()
 }
//  conditional rendering - if else
if(isLoggedIn){
   return (<div>
    <button onClick={multiple}>increment - {count}</button>
    {/* <button onClick={()=> setIsLoggedIn(false)}>logout</button> */}
    <button onClick={()=> setIsLoggedIn((prevState)=>!prevState)}>logout</button>
    Hello Jane
    </div>)
}else{
    return (<div>
         <button onClick={()=> setIsLoggedIn((prev)=>!prev)}>login</button>
        {/* <button onClick={()=> setIsLoggedIn(true)}>login</button> */}
        Hello Guest
        </div>)
}
}

export default ConditionalRendering
