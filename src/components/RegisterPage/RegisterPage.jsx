import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

import { Box, Stack } from '@mui/material';


import './RegisterPage.css';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className={"RegisterPage"}>
      <Box
        height={250}
        width={350}
        margin={"auto"} //Centers box
        textAlign={"center"}
        p={2}
        sx={{ border: '10px double gold', backgroundColor: "grey"}}
        >

        <Stack spacing={3} alignItems="center">
        <RegisterForm />
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
        </Stack>

        </Box>
      </div>
  );
}

export default RegisterPage;

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