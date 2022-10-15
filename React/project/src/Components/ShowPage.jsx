

import { Box, Flex, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import styles from "./Makeup.module.css"
import { Card1} from './Card1';
import Droplist from './Droplist';
import SkeletonComp from './SkeletonComp';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  
} from '@chakra-ui/react'

function Page() {
    const [data,setData]=useState([]);
   const [loading,setLoading]=useState(true);
 
   const [order,setOrder]=useState("");
   const [prod,setProd]=useState('');
    async function getData(url){
    try{
      //setLoading(true)
        var res=await fetch(url)
         var res2=await res.json();
         console.log(res2);
         setData(res2);
         }
         finally{ 
        setLoading(false);
         }
       
    }
    function changeUrlOrder(order){
      setOrder(order);
     
    }
    function changeUrlType(prod){
       setProd(prod)
       
    }
    useEffect(()=>{
      let url="https://cosmeticsapi1.herokuapp.com/makeup"
      if(prod.length!==0 && order.length!==0)
       url=`https://cosmeticsapi1.herokuapp.com/makeup?_sort=price&_order=${order}&q=${prod}`
       else if(prod.length!==0)
       url=`https://cosmeticsapi1.herokuapp.com/makeup?q=${prod}`
       else if(order.length!==0)
       url=`https://cosmeticsapi1.herokuapp.com/makeup?_sort=price&_order=${order}`

      getData(url);
     
 },[order,prod])
    //getData();
    if(loading){
      return <SkeletonComp/>
    }
    
  return (
<div style={{
  display:"flex",
  margin:'auto',
  width:'97%'
}}>
<div style={{
   width:"13vw",
   
}}><Menu>
  <MenuButton as={Button} >
    <b>Short By:</b>Relevance
  </MenuButton>
  <MenuList>
    <MenuItem onClick={()=>changeUrlOrder("asc")}>Price:Low To High</MenuItem>
    <MenuItem onClick={()=>changeUrlOrder("desc")}>Price:Hight To Low</MenuItem>
  </MenuList>
</Menu>
<div style={{
  marginTop:'5vh'
}}>
<Menu >
  <MenuButton as={Button} >
    <b>Filter By:</b>Product
  </MenuButton>
  <MenuList >
    <MenuItem  onClick={()=>changeUrlType("crayon")}>Crayon</MenuItem>
    <MenuItem  onClick={()=>changeUrlType("liquid")}>Liquid</MenuItem>
    <MenuItem  onClick={()=>changeUrlType("moisturizer")}>Moisturiser</MenuItem>
    <MenuItem  onClick={()=>changeUrlType(" Palatte")}>Face Palete</MenuItem>
    <MenuItem  onClick={()=>changeUrlType("primer")}>Primer</MenuItem>
    <MenuItem  onClick={()=>changeUrlType("powder")}>Powder</MenuItem>
  </MenuList>
</Menu>
</div>
</div>
<div className={styles.main}>{
  data.map((elem)=>(elem.price!==undefined && <Card1 item={elem} />))

}
</div>
    
    </div>
  )
}

export default Page