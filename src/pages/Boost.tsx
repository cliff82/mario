import { Grid, GridItem, Center, Image, Container } from "@chakra-ui/react"
import Social from './Social';
import Title from './Title';
import { Carousel } from 'antd';


const Boost = () => {
      return (
        
            <>
                  <Title />

                  <Center fontSize='195%' color='Purple'  m={9}>Booster Tracks</Center>
                  
                  <Image pb={5} boxSize='500px' w='100%' h='100%' src='./birdie2.png' alt='birdos' />

                  <Container pb={5}>
        <Carousel autoplay>
    <div>
            <h3 ><Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                 h='100%'
                objectFit='cover'
                src='./luigisMansion.png'
                alt='luigis house' /></h3>
    </div>
    <div>
    <h3 ><Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                 h='100%'
                objectFit='cover'
                src='./dragonDriftway.png'
                alt='driftway' /></h3>
            </div>
            
    <div>
    <h3 ><Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                 h='100%'
                objectFit='cover'
                src='./neoBoswerCity.png'
                alt='neo city' /></h3>
            </div>
            
    <div>
    <h3 ><Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                 h='100%'
                objectFit='cover'
                src='./peachgardens.png'
                alt='garden' /></h3>
    </div>
          </Carousel>
          
      </Container>
      
                  
   <Grid templateColumns='repeat(4, 1fr)'
   gap={3}>
     
<GridItem  w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./parisPromenade.png'
       alt='promo' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./circuitToad.png'
       alt='circuit' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./chocoMountain.png'
       alt='choco' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./coconutMall.png'
       alt='mall' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./tokyoBlur.png'
       alt='blur' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./shroomRidge.png'
       alt='shroom' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./skyGarden.png'
       alt='sky' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./ninjaHideway.png'
       alt='ninja' /></Center></GridItem>
         
         
         <GridItem w='100%' h='100%'><Center><Image
         boxSize='100%'
         w='100%' 
             objectFit='cover'
             src='./newyorkMinute.png'
       alt='york' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./snesMarioCicrcuit.png'
       alt='snes' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./kalimariDesert.png'
       alt='kalimari' /></Center></GridItem> 
     
       <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./waluigiPinball.png'
       alt='pinball' /></Center></GridItem>
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./sydneySprint.png'
       alt='sprint' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./snowLand.png'
       alt='snow' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./mushroomGorge.png'
       alt='gorge' /></Center></GridItem>
     
     <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./skyhighSundae.png'
       alt='sundae' /></Center></GridItem>
     
       <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./londonLoop.png'
       alt='london' /></Center></GridItem>
     
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./booLake.png'
       alt='lake' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./rockMountain.png'
       alt='rock' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./mapleTreeway.png'
       alt='maple' /></Center></GridItem>
       <GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./berlinByways.png'
       alt='berlin' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./peachgardens.png'
       alt='flowers' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./merryMountain.png'
       alt='merry' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./3dsRainbow.png'
       alt='bowser' /></Center></GridItem>
       <GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./amsterdamDrift.png'
       alt='amsterdam' /></Center></GridItem>    
       <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./riversidePark.png'
       alt='park' /></Center></GridItem>
       <GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./dkSnowboardCross.png'
       alt='snowboard' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./yoshiIsland.png'
       alt='island' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./bangkokRush.png'
       alt='bangkok' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./dsMarioCircuit.png'
       alt='ds circuit' /></Center></GridItem>
       <GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./waluigiStadium.png'
       alt='stadium' /></Center></GridItem>    
       <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./singaporeSpeedway.png'
       alt='speedway' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./AthensDash.png'
       alt='athens' /></Center></GridItem>
             <GridItem w='100%' h='100%'  ><Center><Image
                           boxSize='100%'
                           w='100%'
                           
                           objectFit='cover'
                           src='./DaisyCruiser.png'
                     alt='cruiser' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./MoonviewHighway.png'
       alt='moon' /></Center></GridItem>
<GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./SqueakyCleanSprint.png'
       alt='clean' /></Center></GridItem>
       <GridItem w='100%' h='100'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./LosAngelesLaps.png'
       alt='laps' /></Center></GridItem>
       <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./SunsetWilds.png'
       alt='wilds' /></Center></GridItem>
<GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./KoopaCape.png'
       alt='cape' /></Center></GridItem>
<GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./VancouverVelocity.png'
       alt='velocity' /></Center></GridItem>

<GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./rome.png'
                              alt='rome avanti' /></Center></GridItem>       

<GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./dkMountain.png'
                              alt='dk mountain' /></Center></GridItem>   
                        
                        <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./daisycircuit.png'
                              alt='daisy circuit' /></Center></GridItem>       
          
          <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./plantCove.png'
                              alt='prianha plant cove' /></Center></GridItem>       
                        
                        <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./madrid.png'
                              alt='madrid Drive' /></Center></GridItem>       
                        
                        <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./iceWorld.png'
                              alt='Rosalina Ice World' /></Center></GridItem>       
        
          
        <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./castle3.png'
                              alt='bowser castle 3' /></Center></GridItem>  
                        
                        <GridItem w='100%' h='100%'  ><Center><Image
             boxSize='100%'
             w='100%'
             
             objectFit='cover'
             src='./wiiRainbow.png'
                              alt='wii Rainbow road '/></Center></GridItem>       
           


        </Grid>
        
                  <Social />
                  </>
  )
}

export default Boost