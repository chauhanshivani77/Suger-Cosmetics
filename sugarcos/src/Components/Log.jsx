import React from "react";
import styles from "./Log.module.css";
import { Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'

const Log = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img_left}>
          <img
            className={styles.image}
            src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
          />
        </div>
        <div className={styles.img_right}>
          <div className={styles.hi_image}>
            <img src="https://media.sugarcosmetics.com/upload/Hi!.png" />
          </div>
          <div>
            <h3>Login/Sign Up Using Phone</h3>
          </div>
          <div className={styles.input_box}>
            <div className={styles.input_num}>+91</div>
            <div><input className={styles.input_item} type="text" /></div>
          </div>
          <div className={styles.text}>

            Registering for this site allows you to
            access your order status and history. Just fill in the above
            fields, and we'll get a new account set up for you in no time. We
            will only ask you for information necessary to make the purchase
            process faster and easier.

          </div>
          <div>
          <button className={styles.otp_btn} > SEND ME OTP</button>
        </div>
            <hr className={styles.dotted_line}/>
      </div>
    </div>
    </>
  );
};

export default Log;