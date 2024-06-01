import { useState, useEffect } from "react";
import { Center, Box, Button } from "@chakra-ui/react";
import './Matching.css'

interface Image {
   id: number;
   imageUrl: string;
 }
 
 const MatchGame: React.FC = () => {
   const imagesList: Image[] = [
     { id: 1, imageUrl: './banana.png' },
     { id: 2, imageUrl: './3banana.png' },
     { id: 3, imageUrl: './redShell.png' },
     { id: 4, imageUrl: './spiny.png' },
     { id: 5, imageUrl: './boo.png' },
     { id: 6, imageUrl: './bomber.png' },
     { id: 7, imageUrl: './star.png' },
     { id: 8, imageUrl: './superHorn.png' },
     { id: 9, imageUrl: './peach.png' },
      { id: 10, imageUrl: './coin.png' },
      { id: 11, imageUrl: './banana.png' },
      { id: 12, imageUrl: './3banana.png' },
      { id: 13, imageUrl: './redShell.png' },
      { id: 14, imageUrl: './spiny.png' },
      { id: 15, imageUrl: './boo.png' },
      { id: 16, imageUrl: './bomber.png' },
      { id: 17, imageUrl: './star.png' },
      { id: 18, imageUrl: './superHorn.png' },
      { id: 19, imageUrl: './peach.png' },
      { id: 20, imageUrl: './coin.png' },
   ];
 
   const [score, setScore] = useState<number>(0);
   const [timer, setTimer] = useState<number>(30);
    const [selectedImages, setSelectedImages] = useState<number[]>([]);
    const [gameOver, setGameOver] = useState<boolean>(false); 
 
    const handleImageClick = (imageId: number): void => {
      if (gameOver) return; // Prevent interaction when game is over
      setSelectedImages((prevSelectedImages) => {
        if (prevSelectedImages.includes(imageId)) {
          return prevSelectedImages;
        } else {
          const newSelectedImages = [...prevSelectedImages, imageId];
          if (newSelectedImages.length === 2) {
            if (checkIfImagesMatch(newSelectedImages)) {
              setScore((prevScore) => prevScore + 10);
            }
            setTimeout(() => setSelectedImages([]), 1000); // Clear selection after a delay
          }
          return newSelectedImages;
        }
      });
    };
 
   const checkIfImagesMatch = (selectedImages: number[]): boolean => {
     return selectedImages[0] % 2 === selectedImages[1] % 2; // Example logic
   };
 
   useEffect(() => {
      if (timer > 0) {
        const interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
        return () => clearInterval(interval);
      } else {
        setGameOver(true);
      }
    }, [timer]);
    
   const restartGame = () => {
      setScore(0);
      setTimer(30);
      setSelectedImages([]);
      setGameOver(false);
    };
 
    return (
      <>
       <Center pt='10%' pb='5%' fontSize='300%' color='orange'>Matching Game</Center>
      <Box className="match-game">
      <Box className="image-grid">
        {imagesList.map((image) => (
          <img
            key={image.id}
            src={image.imageUrl}
            alt={`Image ${image.id}`}
            onClick={() => handleImageClick(image.id)}
            className={selectedImages.includes(image.id) ? "selected" : ""}
          />
        ))}
      </Box>
      <Box pt='5%' className="score">Score: {score}</Box>
      <Box color='yellow' className="timer">Timer: {timer} seconds</Box>
      {gameOver && <Button  onClick={restartGame}>Restart Game</Button>}
          </Box>
          </>
  );
};

export default MatchGame;
