import React, { useContext, useState } from 'react'

import style from './bookDis.module.css'
import { StoreContex } from '../stroeContex/contex'
import BookItem from '../bookItem/BookItem'



function BookDis({catagorry,setCatagorr}) {
    const{Book_list}=useContext(StoreContex)
    const [carditem,setCarditem]=useState(false)
  return (
    <div>
      <div className={style.foodDis}>
      <h2>Book</h2>
      
      <div className={style.BookDisList} >
            {
                Book_list.map((x,index)=>{
                        return(
                          <div onClick={()=>setCatagorr(prev=>prev===x._id?"All":"")}>
                            <BookItem key={index} item={x} />
                          </div>
                            
                        )
                })
            }
      </div>

     
    </div>
              {
                Book_list.map((x)=>{
                  if (carditem[x._id]>0) {
                    return(
                      <div>
                        {x.name}
                      </div>
                    )
                  }
                })
              }


    
            
    </div>
  )
}

export default BookDis
