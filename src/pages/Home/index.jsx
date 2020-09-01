import React from 'react';
import { Button } from '@material-ui/core';
import { auth } from '../../config/firebase';

const Home = ({ TestStore }) => {
  const signOut = () => {
    auth.signOut();
  };
  return (
    <>
      <h1>{'Home'}</h1>
      <Button onClick={signOut}>{'Salir'}</Button>
    </>
  );
};

export default Home;
