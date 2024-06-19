import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import './LoginPage.css'

function LoginPage() {
  const history = useHistory();

  return (
      <div className={"LoginPage"}>
    <Box
        height={250}
        width={350}
        margin={"auto"} //Centers box
        textAlign={"center"}
        p={2}
        sx={{ border: '10px double gold', backgroundColor: "grey"}}
        
      >

      <Stack spacing={3} alignItems="center">
      <LoginForm />
      <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </Stack>
      </Box>
      </div>
  );
}

export default LoginPage;
