import React, { Fragment, useState } from "react";
import NavBar from './NavBar.js'


export const Book = () => {

  const [price, setPrice] = useState(0);
  // const []


  return (
    <div>
      <NavBar />
      
      {/* Write Code Here */}
      <h1>Book Something</h1>

    </div>
  )
}


export default Book