import React from 'react';

import './style.scss';
import { useChatScreenDispatch } from '../../contexts/chat-screen';
import { useContactsDispatch } from '../../contexts/contacts';

function Contact({
  id, name, avatar,
}) {
  const dispatchChatScreen = useChatScreenDispatch();
  const dispatchContactsData = useContactsDispatch();

  const handleClick = () => {
    dispatchContactsData({
      type: 'SET_CONTACTS_DATA',
      payload: {
        id,
        name,
        avatar,
      },
    });
    dispatchChatScreen({
      type: 'DISPLAY',
    });
  };


  return (
   <div className="contacts__container" onClick={handleClick}>
      <img src={avatar} alt={name} className="contacts__img" />
      <div className="contacts__texts">
        <h3 className="texts__name">{name}</h3>
      </div>
  </div>);
}

export default Contact;