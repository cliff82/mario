import { Container, Image } from "@chakra-ui/react";
import Social from "./Social";
import Title from "./Title";
import { Carousel as AntCarousel } from "antd";


import MatchGame from './MatchGame';

function Home() {
  return (
    <>
      <Title />
      
      
      
      <Container pb={5}>
        <AntCarousel autoplay vertical>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='10%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./chocoMountain.png'
                alt='choco'
              />
            </h3>
          </div>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./lunarColony.png'
                alt='lunar'
              />
            </h3>
          </div>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./parisPromenade.png'
                alt='paris'
              />
            </h3>
          </div>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./wildWoods.png'
                alt='wild'
              />
            </h3>
          </div>
        </AntCarousel>
      </Container>

      <Image pb={5} boxSize='500px' w='100%' h='100%' src='./twitchShot.png' alt='city pic' />

      <Container pb={5}>
        <AntCarousel autoplay>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./bowserCastle.png'
                alt='bowser'
              />
            </h3>
          </div>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./donutPlains3.png'
                alt='donut'
              />
            </h3>
          </div>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./grubleVolcano.png'
                alt='gruble'
              />
            </h3>
          </div>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./kalimariDesert.png'
                alt='kalimar'
              />
            </h3>
          </div>
        </AntCarousel>
      </Container>

      <Image pb={5} pt={5} boxSize='500px' w='100%' h="100%" src='./battle.jpeg' alt='battle' />
      
      <Container pb={5} pt={5}>
        <AntCarousel autoplay vertical>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./babyPark.png'
                alt='baby'
              />
            </h3>
          </div>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./booLake.png'
                alt='boo'
              />
            </h3>
          </div>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./circuitToad.png'
                alt='circuit'
              />
            </h3>
          </div>
          <div>
            <h3>
              <Image
                borderRadius='5%'
                boxSize='100%'
                w='100%'
                h='100%'
                objectFit='cover'
                src='./coconutMall.png'
                alt='coconut'
              />
            </h3>
          </div>
        </AntCarousel>
      </Container>

      <MatchGame />
      <Social />
    </>
  );
}

export default Home;

