import React from 'react';

import './styles.scss';

import Header from './Header';
import Form from './Form';
import Chats from './Chats';


function Sidebar({user}) {
  return (
    <aside
      className="sidebar"
      style={{ display: 'flex' }}
    >
      <div className="default">
        <Header showModal={true} user={user} />
        <Form />
        <Chats />
      </div>
    </aside>
  );
}

export default Sidebar;