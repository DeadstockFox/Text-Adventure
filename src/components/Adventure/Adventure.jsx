import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';



const Adventure = () => {

    const dispatch = useDispatch();


    return (
        <>
        <Box
        minHeight={ "calc(100vh - 30px)"}
        width={"calc(100vw-10)"}
        textAlign={"center"}
        p={0}
        m={0}
        sx={{ border: '5px solid grey' }}
      >

        <div style={{backgroundColor: "blue", height: "400px"}}> IMAGE TEST</div>
        <div style={{backgroundColor: "grey", height: "329px"}}> TEXT SCROLL TEST</div>
        <input style={{width: "700px"}}></input>
        <button onClick={() => dispatch({ type: 'LOGOUT' })} >Logout</button>



        </Box>
        </>

    )


}

export default Adventure;