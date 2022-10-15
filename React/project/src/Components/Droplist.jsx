

import React from 'react'
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

function Droplist() {
  return (
    <>
   <Menu>
  <MenuButton as={Button} >
    <b>Short By:</b>Relevance
  </MenuButton>
  <MenuList>
    <MenuItem>Price:Low To High</MenuItem>
    <MenuItem>Price:Hight To Low</MenuItem>
  </MenuList>
</Menu>
    </>
  )
}

export default Droplist