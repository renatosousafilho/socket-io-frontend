import React from 'react';

// import { Container } from './styles';

function UserItem(user) {
  return (
    <a href='/chat/<%= user.id %>' class="chat-list">
      <div class="person-profile">
        <img
          src={user.avatar_url}
          alt="" class="user-img" />
        <div class="person-name">
          <h1 class="persion-name-heading">{user.name}</h1>
          <p class="person-chat">...</p>
        </div>
      </div>
      <p class="last-chat-time">12:00 pm</p>
    </a>
  );
}

export default UserItem;