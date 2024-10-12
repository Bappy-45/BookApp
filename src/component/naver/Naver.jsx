import React, { useState } from 'react';
import style from './naver.module.css';
import { Link } from 'react-router-dom';
import { FiAlignCenter } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

function Naver() {
    const [menu, setMenu] = useState("Home");
    const [menuVisible, setMenuVisible] = useState(false);

    const showMenu = () => {
        setMenuVisible(true);
    };
    
    const hideMenu = () => {
        setMenuVisible(false);
    };

    return (
        <div className={style.naver}>
           <Link className={style.link} to="/">
           <h2 className={style.logo}>Book Vibe</h2></Link> 

            <div className={`${style.navul} ${menuVisible ? style.show : ''}`}>
                <RxCross1 onClick={hideMenu} className={style.icon1} />
                <ul className={style.naverMenu}>
                    <Link className={style.link} to="/">
                        <li onClick={() => { setMenu("Home"); hideMenu(); }} className={menu === "Home" ? style.active : ""}>Home</li>
                    </Link>
                    <Link className={style.link} to="/ListBooks">
                        <li onClick={() => { setMenu("Listed Book"); hideMenu(); }} className={menu === "Listed Book" ? style.active : ""}>Listed Book</li>
                    </Link>
                    <Link className={style.link} to="/PagesTo">
                        <li onClick={() => { setMenu("Pages to Read"); hideMenu(); }} className={menu === "Pages to Read" ? style.active : ""}>Pages to Read</li>
                    </Link>
                </ul>
            </div>

            <div className={style.naverR}>
                <button className={style.btn1}>Sign In</button>
                <button className={style.btn2}>Sign Up</button>
            </div>

            <FiAlignCenter onClick={showMenu} className={style.icon} />
        </div>
    );
}

export default Naver;
