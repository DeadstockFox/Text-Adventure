import Box from '@mui/material/Box';

export default function TitleStyle({onNewGame, onLoadGame}) {


    return (
      <Box
        height={400}
        width={400}
        my={9}
        margin={"auto"} //Centers box
        textAlign={"center"}
        gap={4}
        p={2}
        sx={{ border: '2px solid grey' }}
      >
      <button justifyContent={"center"} onClick={() => onNewGame()}>New Game</button>
      
      <button justifyContent={"center"} onClick={() => onLoadGame()}>Load Game</button>
      
      </Box>
    );
  }