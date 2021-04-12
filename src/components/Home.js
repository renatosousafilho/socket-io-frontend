import React, { useEffect, useState } from 'react';
import socketClient from '../utils/socketClient';

import './Home.css';

import data from '../data';

import UserItem from './UserItem'
import Form from './Form'

function Home() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    socketClient.on("chat.updateUsers", (data) => {
      const updatedUsers = data.filter((u) => u.socketId !== socketClient.id);
      setUsers(updatedUsers);
    });
  }, []);


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

          <Form />

          {users.map((user) => (
            <UserItem {...user} key={user.username} />
          ))}
        </div>
      </div>
    </>
  );
}
    
    export default Home;