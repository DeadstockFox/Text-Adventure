import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <body>
      <Box
      height={300}
      width={400}
      margin={"auto"} //Centers box
      textAlign={"center"}
      p={2}
      sx={{ border: '10px double gold', backgroundColor: "grey"}}
      
      >
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
      </Box>
    </body>
  );
}

export default LoginPage;
