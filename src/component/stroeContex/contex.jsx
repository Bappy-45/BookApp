import { createContext } from "react";
 import {Book_list} from '../../assets/kook'

export const StoreContex=createContext(null)

const StoreContexProvider=(props)=>{
   
    const contexvalue={
            Book_list,     
    }
    return(
        <StoreContex.Provider value={contexvalue}>
            {props.children}
        </StoreContex.Provider>
    )
}
export default StoreContexProvider;