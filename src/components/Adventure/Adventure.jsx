import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import { useState, useEffect } from "react";
import axios from "axios";

import './Adventure.css';




const Adventure = () => {

    const dispatch = useDispatch();
    const [promptRequest, setPromptRequest] = useState(1);
    const [promptReturn, setPromptReturn] = useState([]);
    

    const testGet = () => {
        axios.get(`/api/temp/${promptRequest}`).then((r) => {
            console.log(r.data);
            setPromptReturn(r.data);
        }).catch((e) => {
            console.log('Error in client-side GET request,', e);
        })
    };

    useEffect(() => {
        testGet();
    }, [])


    return (
        <>
        <Box
        minHeight={ "calc(100vh - 30px)"}
        width={"calc(100vw-10)"}
        textAlign={"center"}
        p={0}
        m={0}
        sx={{ border: '5px solid black' }}
      >

        {
            promptReturn.map((p) => {
            return <div style={{backgroundColor: "darkblue", height: "calc(100vh - 370px"}}>
                <img src={p.image_path} />
                </div>
            })}

        {
            promptReturn.map((prompt) => {
                return <div style={{backgroundColor: "grey", height: "calc(100vh - 460px)"}} key={prompt.id}>
                    <p style={{marginTop: "0px"}}>{prompt.description}</p>
                    <p>{prompt.option_a}</p>
                    <p>{prompt.option_b}</p>
                    <p>{prompt.option_c}</p>
                    <p>{prompt.option_d}</p>
                </div>
            })}   
        <input style={{width: "700px"}}></input>
        <button onClick={() => dispatch({ type: 'LOGOUT' })} >Logout</button>



        </Box>
        </>

    )


}

export default Adventure;