import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function TitleStyle({props}) {

   const { onNewGame, onLoadGame, history} = props;


    return (
      <Box
        height={250}
        width={350}
        margin={"auto"} //Centers box
        textAlign={"center"}
        p={2}
        sx={{ border: '10px double gold', backgroundColor: "grey"}}
        //justifyContent={"center"}
        //gap={4}
        //my={9}
      >

      <Stack spacing={3} alignItems="center">
      <p style={{fontSize: "50px", color: "gold"}}>Text Adventure (Spooky)</p>

      <button onClick={() => onNewGame()}>New Game</button>
      
      <button onClick={() => onLoadGame()}>Load Game</button>

      <button onClick={() => history.push('creditsSplash')}>Credits</button>

      </Stack>
      </Box>
    );
  }