import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles1 from "./Makeup.module.css"
import { v4 as uuid } from "uuid";
import styles from "./Color.module.css";
import { useDispatch } from "react-redux";
import addToCart from "./Redux/Action";
export const SinglePageLips = () => {
    const [data, setData] = useState({});
    let { id } = useParams();
  const dispatch=useDispatch();
    const [color, setColor] = useState([]);

    useEffect(() => {
        const hadllecall = async () => {
            try {
                let res = await fetch(`https://cosmeticsapi1.herokuapp.com/makeup/3`);
                let data = await res.json();
                // console.log(data);
                setData(data);
            } catch (e) {
                console.log(e);
            }
        };
        hadllecall();
    }, []);

    return (
        <>
            {!!data && (
                <>
                    <div className={styles.mainContine}>
                        <div className={styles.firstHalf}>
                            <img className={styles.img} src={data.image} alt={data.name} />
                            <div id={styles1.btnHold} style={{
                                marginTop:'1rem'
                            }}>
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
              className={styles1.whislisticon}
              src="https://cdn3.iconfinder.com/data/icons/marketing-e-commerce/128/icons_-_marketing-41-512.png"
            />
          </button>
          <button id={styles1.btn} style={{
            fontSize:'1.6rem',
            backgroundColor:'white',
            color:'black',
            border:'1px solid black'

          }} onClick={dispatch(addToCart(data))}>
            Add to Cart
          </button>
        </div>
                        </div>
                        <div className={styles.secondHalf}>
                            <div>
                                <p>{data.name}</p>
                            </div>
                            <div id={styles.ratingHold}>
                                <img
                                    id={styles.star}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW-ijbF7ZlfvwARw20McEOaUkKA_HdCK7vA&usqp=CAU"
                                    alt=""
                                />
                                <p id={styles.rating}>
                                    {data.rating} (34){" "}
                                </p>
                            </div>
                            <div>
                                <p>₹{data.price}</p>
                            </div>
                            <div>
                                <div className={styles.colorDiv}>
                                    <div
                                        className={styles.MainDiv}
                                        style={{ backgroundColor: "#B28378" }}
                                    ></div>
                                    <div
                                        className={styles.MainDiv}
                                        style={{ backgroundColor: "#A36B5E" }}
                                    ></div>
                                    <div
                                        className={styles.MainDiv}
                                        style={{ backgroundColor: "#966A60" }}
                                    ></div>
                                    <div
                                        className={styles.MainDiv}
                                        style={{ backgroundColor: "#8F5954" }}
                                    ></div>
                                    <div
                                        className={styles.MainDiv}
                                        style={{ backgroundColor: "#8F5954" }}
                                    ></div>
                                    <div
                                        className={styles.MainDiv}
                                        style={{ backgroundColor: "#975348" }}
                                    ></div>

                                    <div
                                        className={styles.MainDiv}
                                        style={{ backgroundColor: "#865B69" }}
                                    ></div>
                                    <div
                                        className={styles.MainDiv}
                                        style={{ backgroundColor: "#8E474D" }}
                                    ></div>



                                </div>
                                <div className={styles.offer}>
                                    <h2 >Available Offers!!!</h2>
                                    <ul>
                                        <li>Get A Matte Attack Transferproof Lipstick - 06 Spring Crimson (Crimson Red) </li>
                                        <li>Grab A Complimentary Product Worth Rs.2497 On A Spend Of Rs.3399 </li>

                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </>
            )}

           
        </>
    );
};