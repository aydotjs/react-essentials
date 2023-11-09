import React from 'react'
function clickHandler (){
  console.log("Hello")
}
const TabButton = ({children}) => {

  return (
   <li><button onClick={clickHandler}>{children}</button></li>
  )
}

export default TabButton
