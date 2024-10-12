import React from 'react'

import style from './header.module.css'
import { book } from '../../assets/kook'
function Header() {
  return (
    
    <div className={style.header}>
      <div className={style.headerCon}>
        <div>
        <h1>Books to freshen up <br /> your bookshelf</h1>
        <button className={style.btn}> View The List</button>
        </div>
      </div>

      <div className={style.hImg}>
        <img src={book.pngwing} alt="" /> 
      </div>

    </div>

    
    
  )
}

export default Header


