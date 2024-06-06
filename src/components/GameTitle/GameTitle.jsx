
import { useHistory } from 'react-router-dom';
import TitleStyle from './TitleStyle';

function GameTitle() {

  const history = useHistory();
 
  //pushes to the registration and login pages respectively
  const onNewGame = () => {
    history.push('/registration');
  };

  const onLoadGame = () => {
    history.push('/login');
  };

 
  return (
      <div style={{display: "flex", minHeight: "calc(100vh - 37px)"}}>
      <TitleStyle onNewGame={onNewGame} onLoadGame={onLoadGame}/> {/*Uses Mui for the Title in its own component*/}
      </div>
       
  );
}

export default GameTitle;
