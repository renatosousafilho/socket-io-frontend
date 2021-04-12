import React, { useEffect, useState } from 'react';

import './styles.scss';
import Contacts from '../../../../utils/data';
import socketClient from '../../../../utils/socketClient';

import Contact from '../../../../components/Contact';

function Chats() {
  const [contacts, setContacts] = useState([]);


  useEffect(() => {
    setContacts(Contacts);
    socketClient.on("chat.updateUsers", (data) => {
      const contacts = data
        .map(d => ({ id: d.socketId, name: d.username, avatar: d.avatar, socketId: d.socketId }))
        .filter(c => c.socketId !== socketClient.id );

      setContacts(contacts);
    });
  }, []);


  return (
    <div className="sidebar__chats">
      {contacts.map(({
      id, name, avatar
    }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        avatar={avatar}
      />
    ))}
    </div>
  );
}

export default Chats;