

import { Stack,Skeleton, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

function SkeletonComp() {
    console.log("awejbkewioj dsv");
  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <Skeleton height='30vh' />
  <Skeleton height='30vh' />
  <Skeleton height='30vh' />
  <Skeleton height='30vh'/>
  <Skeleton height='30vh' />
  <Skeleton height='30vh' />
  <Skeleton height='30vh' />
  <Skeleton height='30vh' />
  <Skeleton height='30vh' />
  <Skeleton height='30vh' />
  <Skeleton height='30vh' />
  <Skeleton height='30vh' />
  
</Grid>

    </>
  )
}

export default SkeletonComp