import React, { useEffect, useState } from 'react';

import './Home.css';

import data from '../data';

import UserItem from './UserItem'

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, []);


  return (
    <>
      <div class="phone-status-bar">
        <h1 class="heading-primary">WhatsApp</h1>
        <div class="phone-status-bar__right-icon">
          <i class="fa fa-search" aria-hidden="true"></i>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </div>
      
      <div class="menu-bar">
        <i class="fa fa-camera" aria-hidden="true"></i>
        <ul class="menu-bar__list">
          <li class="menu-bar__list-item" onclick="changeTab(1);">Chat</li>
          <li class="menu-bar__list-item" onclick="changeTab(2);">Status</li>
          <li class="menu-bar__list-item" onclick="changeTab(3);">Calls</li>
        </ul>
      </div>
      
      <div class="chat-status-call">
        <div class="chat-container">
          <div class="contact-list">
            <i class="material-icons">
            chat
            </i>
          </div>

          {users.map((user) => (
            <UserItem {...user} />
          ))}
        </div>
      </div>
    </>
  );
}
    
    export default Home;