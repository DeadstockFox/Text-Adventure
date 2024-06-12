import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import './Adventure.css';






const Adventure = () => {

    let history = useHistory();

    const dispatch = useDispatch();
    const [inputRequest, setInputRequest] = useState("");
    
    let promptDetails = useSelector(store => store.prompts);

    useEffect(() => {
        dispatch({type: 'FETCH_PROMPT', payload: 1 });
    }, [])


    const submitChoice = async (e) => {
        const pd = promptDetails[0];
        
        let promptRequestA = await (inputRequest == pd.option_a ? true : false );
        let promptRequestB = await (inputRequest == pd.option_b ? true : false );
        let promptRequestC = await (inputRequest == pd.option_c ? true : false );
        let promptRequestD = await (inputRequest == pd.option_d ? true : false );

        //console.log(myPromise);
            if (promptRequestA == true && inputRequest != "End Game" ) {
                dispatch({type: 'FETCH_PROMPT', payload: promptDetails[0].option_a_dest});
            } else if (promptRequestB == true) {
                dispatch({type: 'FETCH_PROMPT', payload: promptDetails[0].option_b_dest});
            } else if (promptRequestC == true) {
                dispatch({type: 'FETCH_PROMPT', payload: promptDetails[0].option_c_dest});
            } else if (promptRequestD == true) {
                dispatch({type: 'FETCH_PROMPT', payload: promptDetails[0].option_d_dest});
            }else if (promptRequestA == true && inputRequest == "End Game") {
                history.push('/credits')
            } else {
                alert("Incorrect Input. Please try again!");
            }

            setInputRequest("");
    };

    return (
        <>
        <Box
        minHeight={ "calc(100vh - 20px)"}
        width={"calc(100vw-10)"}
        textAlign={"center"}
        p={0}
        m={0}
      >
        {/*map function for the image data*/}
        {
            promptDetails.map((p) => {
            return <div style={{backgroundColor: "darkblue", height: "calc(100vh - 400px",  border: '5px solid black', display: "flex", justifyContent: "center"}}>
                <img src={p.image_path} />
                </div>
            })}

        {/*map function for the description and choices data*/}
        {
            promptDetails.map((prompt) => {
                return <div style={{backgroundColor: "grey", height: "calc(100vh - 432px)"}} key={prompt.id}>
                    <p style={{marginTop: "0px", paddingInlineStart: "28px", paddingInlineEnd: "28px", fontSize: "18px"}}>{prompt.description}</p>
                    
                    <Box sx={{ width: '100%'}}>
                        <br />
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                        <Grid item xs={6}>{prompt.option_a == "2067" || prompt.option_a == "key" ? "-- -- -- --" : prompt.option_a}</Grid>
                        <Grid item xs={6}> {prompt.option_b} </Grid>
                        <Grid item xs={6}> {prompt.option_c} </Grid>
                        <Grid item xs={6}> {prompt.option_d} </Grid>
                    </Grid>
                    </Box>
                </div>
            })}   
        <form onSubmit={(e) => submitChoice()} style={{backgroundColor: "grey"}}>
        <input onChange={(e) => setInputRequest(e.target.value)}style={{width: "700px"}} value={inputRequest}></input>
        <button>Submit</button>
        </form>

        </Box>
        </>

    )


}

export default Adventure;