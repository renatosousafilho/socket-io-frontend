import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function UserItem(user) {
  return (
    <Link to={`/chat/${user.username}`} className="chat-list">
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
    </Link>
  );
}

export default UserItem;