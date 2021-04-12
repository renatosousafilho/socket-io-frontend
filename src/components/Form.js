import React, { useState } from 'react';
import socketClient from '../utils/socketClient';


// import { Container } from './styles';

function FormNewUser() {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    socketClient.emit('chat.addUser', { username, avatar });

    // console.log(username, avatar)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Apelido</label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />

      <label>Avatar</label>
      <input type="text" onChange={(e) => setAvatar(e.target.value)} />

      <input type="submit" value="Entrar" />
    </form>
  );
}

export default FormNewUser;