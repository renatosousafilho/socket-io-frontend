import React from 'react';

// import { Container } from './styles';

function UserItem(user) {
  return (
    <a href='/chat/<%= user.id %>' className="chat-list">
      <div className="person-profile">
        <img
          src={user.avatar}
          alt="" className="user-img" />
        <div className="person-name">
          <h1 className="persion-name-heading">{user.username}</h1>
          <p className="person-chat">...</p>
        </div>
      </div>
      <p className="last-chat-time">12:00 pm</p>
    </a>
  );
}

export default UserItem;