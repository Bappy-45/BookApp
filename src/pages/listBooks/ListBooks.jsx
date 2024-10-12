import React, { useContext } from 'react'
import { StoreContex } from '../../component/stroeContex/contex'
import style from './listbook.module.css'
import { PiBookThin } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";

import { IoLocationOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";
function ListBooks() {
  const{Book_list}=useContext(StoreContex)
  return (
    <div>
      <h1 className={style.h1}>Book</h1>
      <div className={style.btn}>
      <button>Sort By <GoChevronDown className={style.dun} /></button>
      </div>
      <div className={style.list}>
        <button>Read Books</button>
        <div>Wishlist Books</div>
      </div>

      
        {
          Book_list.map((x,index)=>{
            return(
              <div className={style.cart}>

                <div className={style.cartCon}>
                  <div className={style.img}>
                  <img src={x.image} alt="" />
                   </div>
          
                  <div className={style.right}>
                      <h1>{x.name}</h1>
                      <p className={style.pp}>{x.description}</p>

                      <div className={style.tag}>
                        <div><span>Tag</span></div>
                        <div className={style.btnn}>#Young Adult</div>
                        <div className={style.btnn}>#Identity</div>
                        <div className={style.loc} ><IoLocationOutline /> <p className={style.p}>Year of Publishing: 1924</p></div>

                      </div>
                      <div className={style.publish}>
                          <div className={style.GrGroup}><GrGroup />
                            <p>Publisher: Scribner</p>
                          </div>
                          <div className={style.pinb}><PiBookThin />
                            <p> Page 192</p>
                          </div>
                      </div>
                      <hr className={style.hr}/>
                      <div className={style.group}>
                        <div className={style.grupbtn1}>Category: Classic</div>
                        <div className={style.grupbtn2}>Rating: 4.5</div>
                        <div className={style.grupbtn3}>View Details</div>
                      </div>
                  </div>
            </div>

              </div>
            )
          })
        }

      </div>
    
  )
}

export default ListBooks


{/*  */}