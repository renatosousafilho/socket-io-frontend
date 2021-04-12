import React from 'react';

// import { Container } from './styles';

function MessageItem({message, received}) {
  return (
    <div className={`message ${received ? 'received' : 'sent'}`}>
      {message}
    </div>
  );
}

export default MessageItem;