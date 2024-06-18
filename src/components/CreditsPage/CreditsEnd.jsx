import React from 'react';
import './Credits.css';
import { useHistory } from 'react-router-dom';

const CreditsEnd = () => {

    const history = useHistory();

    const endGame = () => {
      
    }


    return (
        <div className={"credits"}>
        <button className='returnHome' onClick={() => endGame()}> Return to Title</button>
        </div>
    )
}

export default CreditsEnd;