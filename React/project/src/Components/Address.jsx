

import React, { useState } from 'react'
import styles from './Address.module.css'
function Address() {
    const initState={
        firstName:'',
        lastName:'',
        email:'',
        company:'',
        mobile:0,
        flat:'',
        apartment:'',
        pincode:0,
        state:'',
        city:'',
        country:''
    }
    const [address,setAddress]=useState(initState);
    const {firstName,lastName,email,company,mobile,flat,apartment,pincode,state,city,country}=address;
    function handleChange(e){
     const {name,value}=e.target;
    
     setAddress({...address,[name]:value})

    }
   
    function handleClick(){
        if(firstName.length===0 || lastName.length===0 ||
            email.length===0 || city.length===0 || state.length===0 || country.length===0 || 
            apartment.length===0 || 
            mobile.length!==10 || pincode.length!==6 ){
            alert("Enter Valid data")
         }
         else
        localStorage.setItem("Address",JSON.stringify(address));
    }
  return (
    <div className={styles.main}>
    
        <div className={styles.top}>
            <button className={styles.btn}>LOGIN / SIGNUP</button>
            <p style={{
                 textAlign:'center',
                 fontSize:'1rem',
                 marginTop:'-0.8rem'
            }}>OR</p>
            <p style={{
                 textAlign:'center',
                 fontSize:'1.5rem',
                 marginTop:'-1.4rem',
                 color:'rgb(33,37,41)'
            }}>CONTINUE AS GUEST</p>
        </div>
        <div className={styles.row}>
            <input type='text' placeholder='First Name*' name='firstName' value={firstName} onChange={handleChange} required />
            <input type='text' placeholder='Last Name*' name='lastName' value={lastName}onChange={handleChange} required />
            <input type='text' placeholder='Company' name='company' value={company} onChange={handleChange}/>
        </div>
        <div className={styles.row}>
        <input type='text' placeholder='Flat Number' name='flat' value={flat} onChange={handleChange}/>
            <input type='email' placeholder='Email Id*'name='email' value={email} onChange={handleChange} required />
            <input type='number' placeholder='Mobile Number*' name='mobile' value={mobile}onChange={handleChange} required/>
        </div>
        <div className={styles.rowUniq}>
        <input type='text' placeholder='Apartment Address*' name='apartment' value={apartment}onChange={handleChange} required/>
            <input type='number' placeholder='ZipCode/Pincode*'name='pincode' value={pincode} onChange={handleChange} required />
           <button className={styles.btn}>GET DETAILS</button>
        </div>
         <div className={styles.row}>
         <input type='text' placeholder='State*' name='state' value={state} onChange={handleChange} required />
            <input type='text' placeholder='City*' name='city' value={city} onChange={handleChange} required />
            <input type='text' placeholder='Country*' name='country' value={country}onChange={handleChange} required />
         </div>

        <div className={styles.bottom}>
            <button  style={{
                width:'12vw',
                backgroundColor:'white',
                color:'black',
                border:'1px solid black'
            }} className={styles.btn} onClick={cancel}>CANCEL</button>
            <button style={{
                width:'24vw'
            }} className={styles.btn} onClick={handleClick}>SAVE AND USE THIS ADDRESS</button>
        </div>
        
    </div>
  )
}

export default Address