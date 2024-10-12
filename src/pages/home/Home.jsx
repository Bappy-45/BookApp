import React, { useState } from 'react'
import Header from '../../component/header/Header'
import BookDis from '../../component/BookDisplay/BookDis'
import Product from '../../component/product/Product'

function Home() {
  const [catagorry,setCatagorry]=useState("All")
  return (
    <div>
      <Header/>
      <BookDis catagorry={catagorry} setCatagorry={setCatagorry}/>
      <Product  />
    </div>
  )
}

export default Home
