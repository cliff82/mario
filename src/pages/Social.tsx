import {  Grid, GridItem, Center, Link,  } from "@chakra-ui/react"
import { FaYoutube, FaTwitch, FaCoins, FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Social = () => {
  return (
   <Center>
   <Grid pt='10%' templateColumns='repeat(6, 1fr)' gap={5}>
   <GridItem fontSize="240%" color="red" w='100%' h='100'><Link href="https://www.youtube.com/channel/UCEQcS25tX-N9XOGjntY_xhw" isExternal><FaYoutube /></Link></GridItem>
     <GridItem fontSize="240%" color="purple" w='100%' h='100' ><Link href="https://www.twitch.tv/mrnice2418" isExternal><FaTwitch /></Link></GridItem>
        <GridItem fontSize="240%" color="lightBlue" w='100%' h='100' ><Link href="https://twitter.com/mcnastyc804" isExternal><CiTwitter /></Link></GridItem>
        <GridItem fontSize="240%" color="blue" w='100%' h='100' ><Link href="https://tinyurl.com/5f62fyvj" isExternal><FaFacebook /></Link></GridItem>
        <GridItem fontSize="240%" color="brown" w='100%' h='100' ><Link href="https://clifftonjamessr.netlify.app" isExternal><CgProfile /></Link></GridItem>
     <GridItem fontSize="240%" color="yellow" w='100%' h='100' ><Link href="https://cash.app/$Wingking1982" isExternal><FaCoins  /></Link></GridItem>
     
     
   </Grid>
   </Center>       
  )
}

export default Social