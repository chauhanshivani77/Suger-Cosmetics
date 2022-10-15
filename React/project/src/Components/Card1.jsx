import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Makeup.module.css";
// import { v4 as uuid } from "uuid";
import addToCart from "./Redux/Action";


export const Card1 = (item) => {
  const [data,setData]=useState([]);
   const Cart =useSelector((state)=>state.Cart);
   const dispatch=useDispatch();

 
  const [review, setReview] = useState(0);
   const { image, rating, price, name, id, catg } = item.item;
    let amount = +item.item.amount;

 
    // let rand = Math.floor(Math.random() * 1000);
    //   setReview(rand)



  useEffect(() => {
      let rand = Math.floor(Math.random() * 1000);
      setReview(rand)  
  }, []);

  

  return (
    <>
      <div id={styles.unit}>
      <div style={{
        height:'45vh'
      }}>
        <img id={styles.img} src={image} />
        <p id={styles.name}>{name}</p>
        <p id={styles.price}>₹{price}</p>

        <div id={styles.ratingHold}>
          <img
            id={styles.star}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW-ijbF7ZlfvwARw20McEOaUkKA_HdCK7vA&usqp=CAU"
            alt=""
          />
          <p id={styles.rating}>
            {rating} ({review}){" "}
          </p>
        </div>
        </div>
        <div id={styles.btnHold}>
          <button style={{
            display:"block",
            borderRadius:'0.5rem',
            marginRight:'1rem',
            cursor:'pointer',
            border:'1px solid black',
            width:'5rem',
            padding:'0.2rem'
          }}>
            <img
              className={styles.whislisticon}
              src="https://cdn3.iconfinder.com/data/icons/marketing-e-commerce/128/icons_-_marketing-41-512.png"
            />
          </button>
          <button id={styles.btn} style={{
            fontSize:'1.2rem'
          }} onClick={()=>dispatch(addToCart(item.item))}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}