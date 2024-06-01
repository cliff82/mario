import { Grid, GridItem, Center, Image, Link } from "@chakra-ui/react"
import Social from './Social';
import Title from './Title';


const Battle = () => {
      return (
        
            <>
                  
                  <Title />

                  <Center fontSize='195%' color='brown'  m={9}>Battle Mode</Center>

   <Grid pt={5} templateColumns='repeat(4, 1fr)' gap={6}>
        
   <GridItem  w='100%' h='100%'  ><Link href="https://youtu.be/xGIq142zpIw?si=URizEQY6LVZ8lazV"><Center><Image
                 boxSize='100%'
                 w='100%'
                 
                 objectFit='cover'
                 src='./battleStadium.png'
           alt='battle stadium' /></Center></Link></GridItem>
   <GridItem  w='100%' h='100%'  ><Link href="https://youtu.be/YM4z34Zs8Po?si=-48rAru7DJZeUoBQ"><Center><Image
                 boxSize='100%'
                 w='100%'
                 
                 objectFit='cover'
                 src='./sweetSweetKingdom.png'
           alt='sweet sweet kingdom' /></Center></Link></GridItem>
   <GridItem  w='100%' h='100%'  ><Link href="https://youtu.be/g9Sew_npOL0?si=BmheJ11GzKLF-oMZ"><Center><Image
                 boxSize='100%'
                 w='100%'
                 
                 objectFit='cover'
                 src='./dragonPalace.png'
           alt='dragon palace' /></Center></Link></GridItem>
   <GridItem  w='100%' h='100%'  ><Link href="https://youtu.be/-t7FPMrXRYg?si=nm0NCHI7F3jrB5AV"><Center><Image
                 boxSize='100%'
                 w='100%'
                 
                 objectFit='cover'
                 src='./lunarColony.png'
           alt='lunar colony' /></Center></Link></GridItem>
           <GridItem  w='100%' h='100%'  ><Link href="https://youtu.be/QgscP-iwQrU?si=S3d3osKlGV28CV5w"><Center><Image
                 boxSize='100%'
                 w='100%'
                 
                 objectFit='cover'
                 src='./wuhuTown.png'
           alt='town' /></Center></Link></GridItem>
           <GridItem  w='100%' h='100%'  ><Link href="https://youtu.be/TIeV9S67dO8?si=w2_fflFPA-68OioT"><Center><Image
                 boxSize='100%'
                 w='100%'
                 
                 objectFit='cover'
                 src='./luigisMansion.png'
           alt='mansion' /></Center></Link></GridItem>
   <GridItem  w='100%' h='100%'  ><Link href="https://youtu.be/-pCTJ2enBlo?si=hxkFPZP38OO05SWV"><Center><Image
                 boxSize='100%'
                 w='100%'
                 
                 objectFit='cover'
                 src='./battleCourse.png'
           alt='battle course' /></Center></Link></GridItem>
   <GridItem  w='100%' h='100%'  ><Link href="https://youtu.be/QSJ11fCmWc4?si=4YQQ0zQj0aBUzU2J"><Center><Image
                 boxSize='100%'
                 w='100%'
                 
                 objectFit='cover'
                 src='./urchinUnderpass.png'
           alt='urchin' /></Center></Link></GridItem>       
        </Grid>
        
        <Social />
        </>
         
  )
}

export default Battle