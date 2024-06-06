import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function TitleStyle({onNewGame, onLoadGame}) {


    return (
      <Box
        height={400}
        width={500}
        //my={9}
        margin={"auto"} //Centers box
        textAlign={"center"}
        //gap={4}
        p={2}
        sx={{ border: '2px solid grey' }}
      >
      <Stack spacing={10} alignItems="center">
      <p style={{fontSize: "50px"}}>Game Title</p>

      <button justifyContent={"center"} onClick={() => onNewGame()}>New Game</button>
      
      <button justifyContent={"center"} onClick={() => onLoadGame()}>Load Game</button>

      </Stack>
      </Box>
    );
  }