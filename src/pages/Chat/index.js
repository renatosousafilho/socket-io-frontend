import React, { useContext, useState, useEffect } from 'react';
import socketClient from '../../utils/socketClient';

import './styles.css';

import Sidebar from './Sidebar';
import Body from './Body';

function Chat() {
  const userInitialValue = {
    id: 1234,
    avatar: '',
    name: 'Washington Campos',
  };

  const [user, setUser] = useState(userInitialValue);

  useEffect(() => {
    socketClient.on('chat.currentUser', (d) => {
      const newUser = { id: d.socketId, name: d.username, avatar: d.avatar, socketId: d.socketId }
      setUser(newUser);
    });
  }, [])


  return (
    <div className="chat">
      <Sidebar user={user} />
      <Body user={user} />
    </div>
  );
}

export default Chat;