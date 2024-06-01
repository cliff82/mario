import { Grid, GridItem, Center, Image, Box, Highlight } from "@chakra-ui/react";
import Social from './Social';
import Title from './Title';
import './FlipCard.css';

const Items = () => {
  return (
    <>
      <Title />

      <Center fontSize='195%' color='orange'  m={9}>Items</Center>

      <Center color='red' fontSize='135%' ><Highlight query={['Tap', 'Hover']}
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red', textColor: 'white', mr: '1%', ml: '1%' }}
      >Tap or Hover The Card To See Description</Highlight></Center>

      <Grid pt={5} templateColumns='repeat(auto-fit, minmax(200px, 1fr))' gap={6}>
        {[
          { src: './banana.png', alt: 'banana', frontText: 'Banana', backText: 'Send anyone who hits it into a spin.' },
          { src: './3banana.png', alt: '3 banana', frontText: '3 Bananas', backText: 'Three Bananas that spin around your vehicle.' },
          { src: './greenShell.png', alt: 'green shell', frontText: 'Green Shell', backText: 'Travels in a straight line and knocks over the first driver it hits.' },
          { src: './3green.png', alt: '3 green shells', frontText: '3 Green Shells', backText: 'Three Green Shells that spin around your vehicle.' },
          { src: './redShell.png', alt: 'red shell', frontText: 'Red Shell', backText: 'Locks on and pursues the vehicle in front, knocking over the first driver it hits.' },
          { src: './3red.png', alt: '3 red shells', frontText: '3 Red Shells', backText: 'Three Red Shells that spin around your vehicle.' },
          { src: './spiny.png', alt: 'spiny', frontText: 'Spiny Shell', backText: 'Chases the driver in 1st place, knocking over any other vehicles it hits along the way. This one won’t stop until it catches the leader!' },
          { src: './bomber.png', alt: 'bomber', frontText: 'Bom-omb', backText: 'Bob-ombs explode a short time after use or on impact with a vehicle.' },
          { src: './mushroom.png', alt: 'mushroom', frontText: 'Mushroom', backText: 'Gives you a brief speed boost.' },
          { src: './3mushroom.png', alt: '3 mushrooms', frontText: '3 Mushrooms', backText: 'Three Mushrooms that spin around your vehicle. Press [L] to use one of them for a brief speed boost.' },
          { src: './goldMushroom.png', alt: 'gold mushroom', frontText: 'Gold Mushroom', backText: 'For a short time, allows you to use a Mushroom every time you press [L].' },
          { src: './star.png', alt: 'star', frontText: 'Star', backText: 'Makes you invincible for a short time, protecting you from all attacks and obstacles. It also boosts your speed and knocks over any vehicle you hit.' },
          { src: './question.png', alt: 'new item', frontText: 'New Item', backText: 'New item coming soon' },
          { src: './question.png', alt: 'new item', frontText: 'New Item', backText: 'New item coming soon'},
        ].map((item, index) => (
          <GridItem key={index} w='100%' h='250px'>
            <Box className="flip-card">
              <Box className="flip-card-inner">
                <Box className="flip-card-front">
                  <Center>
                    <Image
                      boxSize='100%'
                      w='100%'
                      h='100%'
                      objectFit='cover'
                      src={item.src}
                      alt={item.alt}
                    />
                  </Center>
                </Box>
                <Box className="flip-card-back">
                  <Center flexDirection="column">
                    <p>{item.frontText}</p>
                    <p>{item.backText}</p>
                  </Center>
                </Box>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Social />
    </>
  );
};

export default Items;
