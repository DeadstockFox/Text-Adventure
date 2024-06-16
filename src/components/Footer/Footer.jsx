import React from 'react';
import { useDispatch } from 'react-redux';
import './Footer.css';
import logout from './logout.png';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  const dispatch = useDispatch();

  return <footer> 
    &copy; Michael K.
    <img  src={logout} onClick={() => dispatch({ type: 'LOGOUT' })}></img>
  </footer>
}

export default Footer;
