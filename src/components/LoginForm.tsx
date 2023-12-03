import React, { useState } from 'react';
import axios from 'axios';
import '../css/LoginForm.css'

export function LoginForm(){
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('email: ', email)
  const handleLogin = async (e: any) => {
    e.preventDefault();

    if(email !== "" && password !== ""){
      const response = await axios.post('http://127.0.0.1:3030/professor/login', {email: email, senha: password},
      {
        headers: {
          'api-key': 3345,
        },
      }
    );
      console.log(response);
    } else {
      alert("Email e Senha devem ser preenchidos!");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='loginFormArea'>
        <input
          className='inputText'
          type="email"
          placeholder='Digite seu e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          className='inputText'
          type="password"
          placeholder='Digite sua senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <div className='notHaveAnAccountArea'>
          <p className='notHaveAnAccount'>Ainda não possui uma conta? <a href="/signup">Cadastre-se já.</a></p>
        </div>
      </div>
      <button className='inputButton' type="submit">Login</button>
    </form>
  );
}