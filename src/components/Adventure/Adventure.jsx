import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import './Adventure.css';






const Adventure = () => {

    let history = useHistory();

    const dispatch = useDispatch();
    const [inputRequest, setInputRequest] = useState("");
    
    let promptDetails = useSelector(store => store.prompts);
    let userDetails = useSelector(store => store.user) //needed for inventory

    useEffect(() => {
        dispatch({type: 'FETCH_PROMPT', payload: 1 }); // Fetching first prompt on reload
        axios.put(`/api/temp/reset/${userDetails.id}`);
        //userDetails.id
    }, [])

    // Function to check current items in inventory and redirect next prompt depending
    const inventoryCheck = async (input) => {
        let inPossession = await axios.get(`api/temp/inv/${userDetails.id}`)
        console.log(inPossession.data[0]);
        dispatch({type: 'FETCH_PROMPT', payload: inPossession.data[0].acquired === true ? 20 : 21}); //Check if Key
    }

    //Function on form submit
    const submitChoice = async (e) => {
        const pd = promptDetails[0];

        //Checks each prompt against input - declares true/false
        let promptRequestA = await (inputRequest == pd.option_a ? true : false );
        let promptRequestB = await (inputRequest == pd.option_b ? true : false );
        let promptRequestC = await (inputRequest == pd.option_c ? true : false );
        let promptRequestD = await (inputRequest == pd.option_d ? true : false );

        //Series of if/then statements to determine which prompt comes next in game
            if (promptRequestA == true && inputRequest == "Pick Up Key") {
                axios.put(`/api/temp/${userDetails.id}`);
                dispatch({type: 'FETCH_PROMPT', payload: promptDetails[0].option_a_dest}); //If player picks up key in kitchen

            } else if (promptRequestA == true && inputRequest == "Insert Key") {inventoryCheck(inputRequest) // If player wants to use key in kitchen

            } else if (promptRequestA == true && inputRequest != "End Game" ) {
                dispatch({type: 'FETCH_PROMPT', payload: promptDetails[0].option_a_dest}); //A
            } else if (promptRequestB == true) {
                dispatch({type: 'FETCH_PROMPT', payload: promptDetails[0].option_b_dest}); //B
            } else if (promptRequestC == true) {
                dispatch({type: 'FETCH_PROMPT', payload: promptDetails[0].option_c_dest}); //C
            } else if (promptRequestD == true) {
                dispatch({type: 'FETCH_PROMPT', payload: promptDetails[0].option_d_dest}); //D

            }else if (promptRequestA == true && inputRequest == "End Game") { //Last prompt that then redirects to credits
                history.push('/ending')
            } else {
                alert("Incorrect Input. Please try again!");
            }

            setInputRequest(""); //Resets Form
    };

    return (
       <div className={"adventure"}>

        {/* Main box for entire game*/} 
        <Box 
        minHeight={ "calc(100vh - 30px)"}
        width={"100vw"}
        textAlign={"center"}
        p={0}
        m={0}
      >
      {/* Main box for entire game*/} 

        {/*map function for the image data*/}
        {
            promptDetails.map((p) => {
            return <div style={{backgroundColor: "#1a1a1a", height: "calc(100vh - 400px", display: "flex", justifyContent: "center"}}>
                <img src={p.image_path} style={{border: '5px solid black'}} />
                </div>
            })}

        {/*map function for the description and choices data*/}
        {
            promptDetails.map((prompt) => {
                return <div style={{backgroundColor: "grey", height: "calc(100vh - 442px)"}} key={prompt.id}>
                    <p style={{marginTop: "0px", paddingTop: "10px", paddingInlineStart: "28px", paddingInlineEnd: "28px", fontSize: "20px"}}>{prompt.description}</p>
                    
                    <Box sx={{ width: '100%'}}>
                        <br />
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} fontWeight={"bold"} >
                        <Grid onClick={() => setInputRequest(prompt.option_a != "2067" ? prompt.option_a : "-- -- -- --" )} item xs={6}>
                        {prompt.option_a == "2067" ? "-- -- -- --" : prompt.option_a}</Grid> {/*Hides password prompt while still taking value*/}

                        <Grid onClick={() => setInputRequest(prompt.option_b)} item xs={6}> {prompt.option_b} </Grid>
                        <Grid onClick={() => setInputRequest(prompt.option_c)} item xs={6}> {prompt.option_c} </Grid>
                        <Grid onClick={() => setInputRequest(prompt.option_d)} item xs={6}> {prompt.option_d} </Grid>
                    </Grid>
                    </Box>
                </div>
            })}   
            
        {/*Form for player choice input*/}
        <form onSubmit={(e) => submitChoice()} style={{backgroundColor: "grey"}}>
        <input onChange={(e) => setInputRequest(e.target.value)}style={{width: "700px"}} value={inputRequest}></input>
        <button>Submit</button>
        </form>

        </Box>
        </div>
    )


}

export default Adventure;