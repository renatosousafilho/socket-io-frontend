import React, { useEffect, useState, useContext } from 'react';
import socketClient from '../utils/socketClient';

import './Home.css';

import UsersContext from '../context/UsersContext';

import UserItem from '../components/UserItem'
import Form from '../components/Form'

function Home() {
  const [currentUser, setCurrentUser] = useState('');
  const [users, setUsers] = useState([]);

  const { setCurrentUsers } = useContext(UsersContext);

  useEffect(() => {

  }, [setCurrentUsers]);

  return (
    <>
      <div className="phone-status-bar">
        <h1 className="heading-primary">TrybeZap</h1>
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