import React, { useEffect, useState, useContext } from 'react';
import socketClient from '../utils/socketClient';

import './Home.css';

import UsersContext from '../context/UsersContext';

import UserItem from './UserItem'
import Form from './Form'

function Home() {
  const [currentUser, setCurrentUser] = useState('');
  const [users, setUsers] = useState([]);

  const { setCurrentUsers } = useContext(UsersContext);

  
  useEffect(() => {
    socketClient.on("chat.updateUsers", (data) => {
      const me = data.find((u) => u.socketId === socketClient.id);
      if (me) setCurrentUser(me.username);
      const updatedUsers = data.filter((u) => u.socketId !== socketClient.id);
      setUsers(updatedUsers);
      setCurrentUsers(data);
    });
  }, [setCurrentUsers]);

  return (
    <>
      <div className="phone-status-bar">
        <h1 className="heading-primary">WhatsApp</h1>
        <div className="phone-status-bar__right-icon">
          <i className="fa fa-search" aria-hidden="true"></i>
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </div>
      
      <div className="chat-status-call">
        <div className="chat-container">
          <div className="contact-list">
            <i className="material-icons">
            chat
            </i>
          </div>

          {currentUser ? currentUser : <Form />}

          {users.map((user) => (
            <UserItem {...user} key={user.username} />
          ))}
        </div>
      </div>
    </>
  );
}
    
    export default Home;