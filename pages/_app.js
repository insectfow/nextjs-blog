import '../styles/globals.scss';
import React, { useEffect, useState } from 'react';
import { authOnchange, authService } from '../lib/firebase';

export default function App({ Component, pageProps }) {

  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    const sns = (user) => {
      setIsLoggedIn(true);
      setUserObj({
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
        updateProfile: (args) => updateProfile(user, {displayName: user.displayName, photoURL: user.photoURL})
      });
    }
    const fail = () => {
      setIsLoggedIn(false);
      setUserObj(null);
    }
    const init = () => {
      setInit(true);
    }
    authOnchange(sns, fail, init);
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL,
      updateProfile: (args) => updateProfile(user, {displayName: user.displayName, photoURL: user.photoURL})
    });
  }


  return <Component refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj} {...pageProps} />;
}