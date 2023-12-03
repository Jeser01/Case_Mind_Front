import React, { useState } from 'react';
import '../css/SignupForm.css'

export function SignupForm(){

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const handleSignup = (e: any) => {
    e.preventDefault();
    console.log('signup with:', name, birth, email, password, passwordConfirm);
  };

  return (
    <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='signupFormArea'>
        <input
          className='inputText'
          type="text"
          placeholder='Digite seu Nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className='inputText'
          type="date"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          required
        />
        <input
          className='inputText'
          type="email"
          placeholder='Digite seu e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <hr />
        <input
          className='inputText'
          type="password"
          placeholder='Digite sua senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className='inputText'
          type="password"
          placeholder='Repita sua senha'
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <br />
        <div className='notHaveAnAccountArea'>
          <p className='notHaveAnAccount'>Já possui uma conta? <a href="/login">Entrar.</a></p>
        </div>
      </div>
      <button className='inputButton' type="submit">Criar conta</button>
    </form>
  );
}