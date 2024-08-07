import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

//Routes
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Adventure from '../Adventure/Adventure';
import CreditsTitle from '../CreditsPage/CreditsTitle';
import GameTitle from '../GameTitle/GameTitle';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Footer from '../Footer/Footer';
import EndForm from '../EndForm/EndForm';

//Styling
import './App2.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}

          <ProtectedRoute exact path="/adventure" >
            {/*logged in shows UserPage else shows LoginPage*/}

          <Adventure />
          <Footer />
          </ProtectedRoute>

          <ProtectedRoute  exact path="/ending"  >
            {/*Shows Form for comments after game completion, must be logged in! */}
           
            <EndForm />
          </ProtectedRoute>

          <Route
            exact path="/login">
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/adventure" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact path="/registration" >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/adventure" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact path="/home" >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/adventure" />
              :
              // Otherwise, show the Title Page
              <GameTitle />
            }
          </Route>

          <Route exact path="/creditsSplash" >
            <CreditsTitle />
           </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>

      
      </div>
    </Router>
  );
}

export default App;
