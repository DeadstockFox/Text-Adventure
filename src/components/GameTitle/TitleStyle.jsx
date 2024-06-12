import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function TitleStyle({onNewGame, onLoadGame}) {


    return (
      <Box
        height={300}
        width={400}
        margin={"auto"} //Centers box
        textAlign={"center"}
        p={2}
        sx={{ border: '10px double gold', backgroundColor: "grey"}}
        justifyContent={"center"}
        //gap={4}
        //my={9}
      >

      <Stack spacing={5} alignItems="center">
      <p style={{fontSize: "50px", color: "gold"}}>Text Adventure (Spooky)</p>

      <button style={{ justifyContent:"center"}} onClick={() => onNewGame()}>New Game</button>
      
      <button style={{ justifyContent:"center"}} onClick={() => onLoadGame()}>Load Game</button>

      </Stack>
      </Box>
    );
  }