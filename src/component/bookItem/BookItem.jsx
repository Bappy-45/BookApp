import React from 'react';
import style from './bookItem.module.css';
import { Link } from 'react-router-dom';

function BookItem({ item }) {
  const { _id, name, yourAdult, Identity, Fiction, description, image } = item;
  
  return (
    <div>
      <div className={style.foodItem}>
        <div className={style.foodImagCon}>
          
          <Link to={`/Product/${_id}`} className={style.link}>
            <div className={style.img}>
                <img src={image} alt={name} />
            </div>
          </Link>
        </div>
        <div className={style.foodInfo}>
          <div className={style.btn}>
            {yourAdult}
          </div>
          <div className={style.btn}>
            {Identity}
          </div>
        </div>
        <div className={style.decInf}>
          <h2>{name}</h2>
          <div className={style.des}>
            {description}
          </div>
        </div>
        <div className={style.dot}>------------------------</div>
        <div className={style.five}>
          <div>{Fiction}</div>
          <div>5.00 <span>*</span></div>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
