import { useDispatch, useSelector } from "react-redux";

import Box from '@mui/material/Box';
import { useState, useEffect } from "react";

import './Adventure.css';




const Adventure = () => {

    const dispatch = useDispatch();
    const [promptRequest, setPromptRequest] = useState(1);
    const [promptReturn, setPromptReturn] = useState([]);
    const [inputRequest, setInputRequest] = useState("");
    
    const promptDetails = useSelector(store => store.prompts);

    const testGet = () => {
        dispatch({type: 'FETCH_PROMPT', payload: promptRequest})
        console.log(promptRequest);
    };

    useEffect(() => {
        dispatch({type: 'FETCH_PROMPT', payload: promptRequest});
    }, [])

    const submitChoice = () => {
        if (inputRequest === promptReturn[0].option_a) {setPromptRequest(promptReturn[0].option_a_dest)}
        else {alert('incorrect choice')};
        dispatch({type: 'FETCH_PROMPT', payload: promptRequest});
        console.log(promptRequest);
        

    }


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
        {/*map function for the image data*/}
        {
            promptDetails.map((p) => {
            return <div style={{backgroundColor: "darkblue", height: "calc(100vh - 370px"}}>
                <img src={p.image_path} />
                </div>
            })}

        {/*map function for the description and choices data*/}
        {
            promptDetails.map((prompt) => {
                return <div style={{backgroundColor: "grey", height: "calc(100vh - 460px)"}} key={prompt.id}>
                    <p style={{marginTop: "0px"}}>{prompt.description}</p>

                    <p>{prompt.option_a} </p>
                    <p>{prompt.option_b}</p>
                    <p>{prompt.option_c}</p>
                    <p>{prompt.option_d}</p>
                </div>
            })}   

        <input onChange={(e) => setInputRequest(e.target.value)}style={{width: "700px"}}></input>
        <button onClick={() => submitChoice()}> Submit</button>

        </Box>
        </>

    )


}

export default Adventure;