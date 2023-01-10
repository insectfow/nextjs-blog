import React, { useState } from "react";
import { createUser, signUser } from '../lib/firebase';
import SocialForm from '../components/SocialForm';
import Layout, { siteTitle } from '../components/laylout.js';
import authStyles from '../styles/auth.module.scss'

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const errorFunc = (error) => {
      setError(error);
    }
    if (newAccount) {
      // create
      createUser(
        email,
        password, errorFunc
      )
    } else {
      // log in
      signUser(
        email,
        password, errorFunc
      )
    }
    
  }

  const onChanges = (event) => {
    const { target: { value, name } } = event;

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  }

  const onToggle = () => setNewAccount((prev) => !prev);

  return (
    <Layout home>
      <h1 className={authStyles.authForm}>Login</h1>
      <form className={authStyles.authForm} onSubmit={onSubmit}>
        <input type='text' name="email" required placeholder="email" value={email} onChange={onChanges} />
        <input type="password" name="password" required placeholder="password" value={password} onChange={onChanges} />
        <input type="submit" value={newAccount ? '회원가입하기' : '로그인하기'} />
        {error ? <span className="error-msg">{ error }</span> : null}
      </form>
      <span className={authStyles.toggleBtn} onClick={onToggle}>{newAccount ? '로그인하러가기!' : '가입하러가기!'}</span>
      <SocialForm />
    </Layout>
   )
}

export default Auth;