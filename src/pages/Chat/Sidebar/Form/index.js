import React, { useEffect, useState } from 'react';
import socketClient from '../../../../utils/socketClient';

function Form() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    socketClient.emit('chat.addUser', { username, origin: socketClient.id });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Apelido: </label>

      <input type="text" onChange={(e) => setUsername(e.target.value)} />

      <input type="submit" value="Entrar" />
    </form>
  );
}

export default Form;