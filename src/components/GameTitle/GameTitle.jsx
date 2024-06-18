
import { useHistory } from 'react-router-dom';
import TitleStyle from './TitleStyle';
import './GameTitle.css'

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
      <div className={"title"} >
      <TitleStyle props={{onNewGame, onLoadGame, history}}/> {/*Uses Mui for the Title in its own component*/}
      </div>
       
  );
}

export default GameTitle;
