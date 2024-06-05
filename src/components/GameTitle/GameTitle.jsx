import './LandingPage.css';
import { useHistory } from 'react-router-dom';



function GameTitle() {

  const history = useHistory();
 
  const onNewGame = () => {
    history.push('/registration');
  };

  const onLoadGame = () => {
    history.push('/login');
  };

 
  return (
      <>
      Landing 
      <br />
      


      <button onClick={() => onNewGame()}>New Game</button>
      <br />
      <button onClick={() => onLoadGame()}>Load Game</button>
      </>
       
  );
}

export default GameTitle;
