import React from 'react';
import { useHistory } from 'react-router-dom';

const CreditsTitle = () => {

    const history = useHistory();

    return (
        <div className={'credits'}>
        <button className={'returnHome'} onClick={() => history.push('/home')}> Return to Title</button>
        </div>
    )
}

export default CreditsTitle;